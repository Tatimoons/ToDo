INSERT INTO roles (
    code,
    name,
    description,
    enabled,
    system,
    created_at,
    created_by,
    updated_at,
    updated_by
)
VALUES (
    'ADMIN',
    'Administrator',
    'Full system administration access',
    true,
    true,
    now(),
    NULL,
    now(),
    NULL
);