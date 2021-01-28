import React, { useEffect, useCallback } from 'react';
import { observer } from "mobx-react-lite";

import { CourseItem } from "./CourseItem/CourseItem";
import { courses } from "../../../store/Courses";

import './RemoveList.css';

export const RemoveList = observer(() => {
    const onRemove = (id) => {
        courses.deleteById(id)
            .then(() => {
                courses.fetchCourses()
            })
    }
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
                                    onRemove = {() => onRemove(pk_course_id)}
                                    />
                                )
                    })
        }
    const getCourse = useCallback(
        () => courses.fetchCourses(), [])
    useEffect(() => getCourse(),[])

    return (
        <div className='courses-container'>
            <h3 className='courses-list-header'>Courses List</h3>
            <div
            className='courses-list'
            >
                {listItems(courses.courses)}
            </div>
        </div>
    );
});

