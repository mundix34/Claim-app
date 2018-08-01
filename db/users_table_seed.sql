create table users(
    id serial primary key,
    ref_id integer references claims(reference_id),
    first_last VARCHAR(180),
    email VARCHAR(300),
    auth_id text,
    picture text,
    address_1 VARCHAR(300),
    address_2 VARCHAR(300),
    city varchar (80),
    state VARCHAR(40),
    zip INTEGER
    
    
    )
