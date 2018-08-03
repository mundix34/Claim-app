insert into reviews (review_id, title, content) values ($1, $2, $3)
returning *;