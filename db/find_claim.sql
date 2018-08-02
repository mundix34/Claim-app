select * from claims
join users
on claims.reference_id = users.ref_id
WHERE reference_id = $1;