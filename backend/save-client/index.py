import json
import os
import urllib.parse
import pg8000.native

def _esc(val):
    """Экранирование строки для Simple Query Protocol."""
    if val is None:
        return 'NULL'
    return "'" + str(val).replace("'", "''") + "'"

def handler(event: dict, context) -> dict:
    """Сохраняет заявку клиента в таблицу clients."""

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

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'id': client_id})
    }
