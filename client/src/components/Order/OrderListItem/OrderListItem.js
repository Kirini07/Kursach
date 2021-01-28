import React from 'react';

import './OrderListItem.css'
export const OrderListItem = ({title, price, count, onDelete}) => {
    return (
            <div className='course-item-container'>
                <div className='course-list-item'>
                    <p className='course-list-item__title'>{`Позиція: ${title}`}</p>
                    <p className='course-list-item__price'>{`Ціна: ${price}`}</p>
                    <p className='course-list-item__count'>{`Кількість: ${count}`}</p>
                </div>
                <div className='order-buttons'>
                    <button onClick={onDelete}>
                        <span className="material-icons">
                             clear
                        </span>
                    </button>
                </div>
            </div>
        );
};
