import React from 'react';
import { useHistory } from 'react-router-dom';

import {CategoryItem} from "./CtegoryItem/CategoryItem";

import './CategoryList.css'
const categories =
    [
        {
            title: 'Перші страви',
            categoryName: 'first_courses',
        },
        {
            title: 'Холодні страви',
            categoryName: 'cold_food',
        },
        {
            title: 'Гарячі страви',
            categoryName: 'hot_food',
        },
        {
            title: 'Салати',
            categoryName: 'salads',
        },
        {
            title: 'Напої',
            categoryName: 'drinks',
        },
        // {
        //     title: 'Інгредієнти',
        //     categoryName: 'ingredients',
        //     pathToList: '#'
        // }
    ];


export const CategoryList = ({ orderId }) => {
    const history = useHistory();
    const renderCategory = categoryList => 
        categoryList.map(
            (category, i) => 
                <CategoryItem 
                key={i} 
                {...category}
                handleClick={(e) => {history.push(`/course/${category.categoryName}$$$${orderId}`)}}
                />
            )
    return (
        <div className='categories'>
            <h3 className='category-list-title'>Categories</h3>
            <div className='category-list'>
                {renderCategory(categories)}
            </div>
        </div>
    );
};
