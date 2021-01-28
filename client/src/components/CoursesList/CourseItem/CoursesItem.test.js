import { CourseItem } from './CourseItem';
import {render, screen} from '@testing-library/react'
describe('App', () => {
    const { findByText } = render(
        <CourseItem 
        title = {'Test'}
        composition = {[
            'test1', 
            'test2', 
            'test3',
            'test4', 
            'test5', 
            'test6'
        ]}
        url = {'https://kathrynskitchenblog.com/wp-content/uploads/2019/08/IMG_7688.jpg'}
        price = {200}
        id = {12}
        onAdd = {()=>{}}
        />
    )

    test('Should be contain text "Test"', () => {
        const courseItem = findByText(/Test/gim)
        expect(courseItem).toBeTruthy()
    });
    test('Should be contain text "Composition list" ', () => {
        const courseItem = findByText(/test1 test2 test3 test4 test5 test6/gim)
        expect(courseItem).toBeTruthy()
    });
    test('Should be contain text "Price: 200" ', () => {
        const courseItem = findByText(/Price: 200/gim)
        expect(courseItem).toBeTruthy()
    });
});