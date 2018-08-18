create table reviews(id serial primary key,
review_id integer references users(id), 
title varchar(40), 
content varchar (400),
rating integer
)
