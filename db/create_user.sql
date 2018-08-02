UPDATE users
SET ref_id =$2, address_1=$3, address_2=$4, city=$5, state=$6, zip=$7
WHERE ID=$1

RETURNING *;
