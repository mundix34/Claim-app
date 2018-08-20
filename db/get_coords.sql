select * from coords coo
join users us on us.user_id=coo.user_id
where us.user_id=$1
