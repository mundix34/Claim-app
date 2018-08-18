UPDATE users
SET given_name =$2, family_name=$3, email=$4, address_1=$5, address_2=$6, city=$7, state=$8, zip=$9, claim=$10, ref_id=$11, is_insured=$12
WHERE user_id = $1

RETURNING *;