CREATE TABLE t_p25600560_body_slim_lpg_websit.clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    email VARCHAR(255),
    appointment_date TIMESTAMP,
    service VARCHAR(255),
    comment TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);