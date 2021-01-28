import React, { useEffect, useCallback } from 'react';
import { observer } from "mobx-react-lite";

import { CourseItem } from "./CourseItem/CourseItem";
import { courses } from "../../store/Courses";
import { orders } from "../../store/Order"

import './CoursesList.css';

export const CoursesList = observer(({orderId, category}) => {
    const categoryName = category.split('_').join(' ')
    const listItems = list => {
        return list.map(
                    ({pk_course_id, title, composition, price, img_path}) => {
                        return (
                            <CourseItem
                                    id={pk_course_id}
                                    key={pk_course_id}
                                    title={title || "asd"}
                                    composition={composition.join(' ')}
                                    price={price}
                                    url={img_path}
                                    onAdd = {count => orders.addToOrderList(orderId, { 
                                        title, 
                                        price: parseInt(price), 
                                        pk_course_id, 
                                        count: parseInt(count) 
                                    })}
                                    />
                                )
                    })
        }    
    const getCourse = useCallback(
        () => {
            courses.fetchCourses().then(() => {}).catch(e => alert(e))
        },
        [],
    )  
    useEffect(() => getCourse(),[getCourse])

    return (
        <div className='courses-container'>
            <h3 className='courses-list-header'>Courses List</h3>
            <div
            className='courses-list'
            >
                {listItems(courses.getByCategoryName(categoryName))}
            </div>
        </div>   
    );
});

