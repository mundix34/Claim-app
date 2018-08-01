select * from claims
join users
on reference_id.claims = ref_id.users
WHERE id = $1;