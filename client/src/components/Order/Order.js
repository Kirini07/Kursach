import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { observer } from "mobx-react-lite";

import './Order.css'
import { orders } from '../../store/Order';
import { OrderListItem } from './OrderListItem/OrderListItem';
import { useHistory } from 'react-router-dom';

export const Order = observer(({orderId}) => {
    const history = useHistory()
    const renderList = (list) => list.map(course => 
        <OrderListItem {...course} 
            key={course.pk_course_id}
            onDelete={()=> {orders.removeFromOrderList(orderId, course.pk_course_id)}}
        />
    )
    const idx = orders.orders.findIndex(order => order.id === orderId)
    const { employeeName, nrPlace, price } = orders.orders[idx]
    const orderList = renderList(orders.orders[idx].orderList)
    return (
            <div className='order-container'>
                <h3 className='order-title'>
                    Order
                </h3>
                <p className='order-header-info'>{`Номер столу № ${nrPlace} | Офіціант: ${employeeName}`}</p>
                <div className='order-btn-container'>
                    <button 
                    onClick={() => history.push(`/category/${orderId}`)}
                    className='add-course-from-order-btn'>
                        Додати позицію
                    </button>
                    <button 
                    onClick={() => {
                        orders.payOrder(orderId)
                        history.push('/exists')
                    }}
                    className='add-course-from-order-btn'>
                        Оплатити
                    </button>
                </div>
                { orderList.length === 0 ? <Alert severity="info">Замовлення пусте</Alert> : orderList}
                <p className='order-price'>{`ЦІНА ЗАМОВЛЕННЯ: ${price}`}</p>
            </div>
    );
});
