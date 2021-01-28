import { NewOrder } from './NewOrder'
import { render } from '@testing-library/react'


describe('App should be contain:', () => {
    test('Should be contain label "Номер столу', () => {
        const {  getByLabelText } = render( <NewOrder/> )
        const nrOfPlace = getByLabelText(/Номер столу/gim)
        expect(nrOfPlace).toBeTruthy()
    });
    test('Should be contain label "Ім\'я офіціанта"', () => {
        const {  getByLabelText } = render( <NewOrder/> )
        const employeeName = getByLabelText(/Ім'я офіціанта/)
        expect(employeeName).toBeTruthy()
    });
    test('Should be contain label "Id офіціанта"', () => {
        const {  getByLabelText } = render( <NewOrder/> )
        const employeeId = getByLabelText(/Id офіціанта/)
        expect(employeeId).toBeTruthy()
    });
    test('Should be contain button "Create"', () => {
        const {  getByText } = render( <NewOrder/> )
        const createBtn = getByText(/Створити/)
        expect(createBtn).toBeTruthy()
    });
    test('Should be contain text "New Order"', () => {
        const {  getByText } = render( <NewOrder/> )
        const newOrder = getByText(/New Order/)
        expect(newOrder).toBeTruthy()
    });
    test('Should be contain text "send"', () => {
        const {  getByText } = render( <NewOrder/> )
        const spanText = getByText(/send/)
        expect(spanText).toBeTruthy()
    });
    test('Should be contain text "push_pin"', () => {
        const {  getByText } = render( <NewOrder/> )
        const spanText = getByText(/push_pin/)
        expect(spanText).toBeTruthy()
    });
    test('Should be contain text "push_pin"', () => {
        const {  getByText } = render( <NewOrder/> )
        const spanText = getByText(/push_pin/)
        expect(spanText).toBeTruthy()
    });
});