create table coords(
    coords_id serial primary key,
    user_id integer references users(user_id),
    lat1 integer,
    lng1 integer,
    agent1 VARCHAR,
    lat2 decimal,
    lng2 decimal,
    agent2 VARCHAR,
    lat3 decimal,
    lng3 decimal,
    agent3 VARCHAR,
    center_name VARCHAR(80),
    center_lat decimal,
    center_lng decimal
    
    
    )
    insert into coords (
lat1,
    lng1,
    agent1,
    lat2 ,
    lng2 ,
    agent2 ,
    lat3,
    lng3 ,
    agent3 
    ) 
VALUES( 40.227717299999995, -111.6620489, 'Agent 1', 40.227762999999996,-111.66203759999999, 'Agent 2', 40.2277414,-111.6620407, 'Agent 3' );
