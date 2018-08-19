UPDATE users
SET ref_id =$2, given_name =$3, family_name=$4, email=$5, address_1=$6, address_2=$7, city=$8, state=$9, zip=$10, claim=$11, is_insured=$12
WHERE user_id=$1
RETURNING *;