import { OrderListItem } from './OrderListItem';
import {render, screen} from '@testing-library/react'
describe('App', () => {
    test('Should be contain text "Test"', () => {
        const { getByText } = render(
            <OrderListItem 
            title = {'Test title'}
            price = {200}
            count = {1}
            onDelete = {() => {}}
            />
        ) 
        const orderListItem = getByText(/Test/gim)
        expect(orderListItem).toBeTruthy()
    });
    test('Should be contain text "Позиція" ', () => {
        const { getByText } = render(
            <OrderListItem 
            title = {'Test title'}
            price = {200}
            count = {1}
            onDelete = {() => {}}
            />
        ) 
        const orderListItem = getByText(/Позиція/)
        expect(orderListItem).toBeTruthy()
    });
    test('Should be contain text "Позиція" ', () => {
        const { getByText } = render(
            <OrderListItem 
            title = {'Test title'}
            price = {200}
            count = {1}
            onDelete = {() => {}}
            />
        ) 
        const orderListItem = getByText(/Ціна/)
        expect(orderListItem).toBeTruthy()
    });
    test('Should be contain text "Позиція" ', () => {
        const { getByText } = render(
            <OrderListItem 
            title = {'Test title'}
            price = {200}
            count = {1}
            onDelete = {() => {}}
            />
        ) 
        const orderListItem = getByText(/Кількість/)
        expect(orderListItem).toBeTruthy()
    });
});