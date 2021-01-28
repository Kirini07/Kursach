import React from 'react';

import  './OrderListItem.css';

export const OrderListItem = ({placeN, employeeName, handleClick, onDelete}) => {
    return (
        <div className='order-list-item'>
            <p className='order-list-item__place'
            >
                { `Столик: ${placeN}`}
            </p>
            <p
                className='order-list-item__employee'
            >

                {`Офіціант: ${employeeName}`}
            </p>
            <div className='order-item-buttons'>
                <button
                    onClick={handleClick}
                    className='order-list-item__btn'
                >
                    Відкрити
                </button>
                <button onClick={onDelete}
                    className='order-list-item__btn'
                >
                    Видалити
                </button>
            </div>
        </div>
    );
};

