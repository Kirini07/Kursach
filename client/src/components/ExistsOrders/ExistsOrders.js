import React from 'react'
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import { observer } from "mobx-react-lite";

import { orders } from '../../store/Order'
import { OrderListItem } from "./OrderListItem/OrderListItem";

import './ExistsOrders.css';

export const ExistsOrders = observer(() => {

    let history = useHistory();

    const onDelete = orderId => {
        const idx = orders.orders.findIndex(order => order.id === orderId)
        if(orders.orders[idx].orderList.length > 0){
            const access = !!window.confirm('Замовлення не пусте! \n Ви впевнені що хочете його видалити ?');
            access && orders.removeOrder(orderId)
        }
        else{
            orders.removeOrder(orderId)
        }
    }
    const renderList = list => list.map(item => 
            <OrderListItem 
            placeN={item.nrPlace} 
            employeeName={item.employeeName} 
            key={item.id}
            onDelete={() => onDelete(item.id)}
            handleClick={() => history.push(`/order/${item.id}`)}
            /> 
        );
    const existsOrders = renderList(orders.orders); 
    return (
        <div className='order-container'>
            <div className='exists-orders-header'>
                <p>
                    Orders
                </p>
            </div>
            <form className="order-search-panel">
                <input
                    className='search-input'
                    type="text"
                    name='search'
                    id='search'
                />
            </form>
            <div className='order-list'>
                { existsOrders.length === 0 ? <Alert severity="info">Замовлень немає</Alert> : existsOrders}
            </div>
        </div>
    );
});
