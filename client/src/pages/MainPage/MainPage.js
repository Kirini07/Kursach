import React from 'react';
import {NavBar} from "../../components/NavBar/NavBar";

import './MainPage.css'

export const MainPage = ({ children }) => {
    return (
        <>
            <NavBar/>
            <div className='main-container'>
                {children}
            </div>
        </>
    );
};
