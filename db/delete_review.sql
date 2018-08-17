delete from reviews
where id = $1
returning *;