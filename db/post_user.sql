UPDATE users
SET ref_id =$2, given_name =$3, family_name=$4, address_1=$5, address_2=$6, city=$7, state=$8, zip=$9, claim=$10, is_insured=$11
WHERE user_id=$1
RETURNING *;