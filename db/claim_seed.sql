create table Claims(
id serial primary key,
reference_id integer unique,
claim_number integer ,
vehicle_year integer,
make varchar (20),
model varchar (40),
ACV decimal,
taxes decimal,
license_fees decimal,
title_fees decimal,
deductible integer,
settlement decimal,
insured boolean

    )