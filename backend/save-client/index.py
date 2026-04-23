import json
import os
# force redeploy v2
import urllib.parse
# redeploy
import urllib.request
import pg8000.native

def _esc(val):
    """Экранирование строки для Simple Query Protocol."""
    if val is None:
        return 'NULL'
    return "'" + str(val).replace("'", "''") + "'"

def send_telegram(message: str):
    """Отправляет уведомление в Telegram."""
    token = os.environ.get('TELEGRAM_BOT_TOKEN', '8701311713:AAGY1aeZ71WXdZmGGhfjKb65u3IXKnCt7ok')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '791882458')
    if not token or not chat_id:
        return
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = json.dumps({'chat_id': chat_id, 'text': message, 'parse_mode': 'HTML'}).encode()
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    try:
        urllib.request.urlopen(req, timeout=5)
    except Exception as e:
        print(f"[Telegram error] {e} | token={token[:20]} | chat={chat_id}")

def handler(event: dict, context) -> dict:
    """Сохраняет заявку клиента и отправляет уведомление в Telegram."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip() or None
    service = body.get('service', '').strip() or None
    comment = body.get('comment', '').strip() or None

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    dsn = os.environ['DATABASE_URL']
    r = urllib.parse.urlparse(dsn)
    password = urllib.parse.unquote(r.password) if r.password else None
    user = urllib.parse.unquote(r.username) if r.username else None

    conn = pg8000.native.Connection(
        host=r.hostname,
        port=r.port or 5432,
        database=r.path.lstrip('/'),
        user=user,
        password=password,
        ssl_context=None
    )

    schema = 't_p25600560_body_slim_lpg_websit'
    sql = (
        f"INSERT INTO {schema}.clients (name, phone, email, service, comment) "
        f"VALUES ({_esc(name)}, {_esc(phone)}, {_esc(email)}, {_esc(service)}, {_esc(comment)}) "
        f"RETURNING id"
    )
    row = conn.run(sql)
    conn.close()
    client_id = row[0][0]

    message = (
        f"📋 <b>Новая заявка #{client_id}</b>\n\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"📞 <b>Телефон:</b> {phone}\n"
        + (f"✉️ <b>Email:</b> {email}\n" if email else "")
        + (f"💆 <b>Услуга:</b> {service}\n" if service else "")
        + (f"💬 <b>Комментарий:</b> {comment}\n" if comment else "")
    )
    send_telegram(message)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'id': client_id})
    }