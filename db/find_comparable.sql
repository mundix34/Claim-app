select co.refer_id, value_1, odo_1, value_2, odo_2, value_3, odo_3, value_4, odo_4, acv, odometer from comparables co
join claims cl on co.refer_id=cl.reference_id
where refer_id=$1

