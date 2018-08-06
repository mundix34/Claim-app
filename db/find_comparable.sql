select * from comparables co
join claims cl on co.refer_id=cl.reference_id
join users us on us.ref_id=co.refer_id
where ref_id=$1