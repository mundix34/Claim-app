UPDATE users
SET ref_id =$2, address_1=$3, address_2=$4, city=$5, state=$6, zip=$7, is_insured=$8
WHERE user_id=$1

RETURNING *;
