const AddActiveOrder = 'SELECT new_order( $1 , $2 ,$3 , $4 , $5, $6 )';
const PayOrderById = 'SELECT add_to_paid_order( $1 )';
const EditOrderById = 'SELECT edit_order_list( $1, $2, $3)';

module.exports = { AddActiveOrder, PayOrderById, EditOrderById };