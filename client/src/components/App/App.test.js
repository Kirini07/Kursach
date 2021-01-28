import { App } from './App'
import { render } from '@testing-library/react'



describe('App should be contain:', () => {
    test('Should be contain label "Password', () => {
        const {  getByLabelText } = render( <App/> )
        const passwordLabel = getByLabelText(/Email Address/gim)
        expect(passwordLabel).toBeTruthy()
    });
});