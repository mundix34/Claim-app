create table comparables_1490(
    comp_id serial primary key,
    refer_id integer references claims(reference_id),
    value_1 integer,
    odo_1 integer,
    value_2 integer,
    odo_2 integer,
    value_3 integer,
    odo_3 integer,
    value_4 integer,
    odo_4 integer
    
    
    
    )
