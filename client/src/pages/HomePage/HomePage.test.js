import { HomePage } from './HomePage';
import {render, screen} from '@testing-library/react'


describe('App', () => {
    test('should ', () => {
        const { getByText } = render(<HomePage/>)
        const homePage = getByText(/Home Page/)
        expect(homePage).toBeTruthy()
    });
});