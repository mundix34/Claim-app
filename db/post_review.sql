insert into reviews (user_id, title, content,rating) values ($1, $2, $3, $4)
RETURNING *;