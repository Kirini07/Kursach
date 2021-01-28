import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { observer } from "mobx-react-lite"

import { Routes } from "../../routes/Routes"
import { MainPage } from "../../pages/MainPage/MainPage"
import { Spiner } from "../Spiner/Spiner"

import { user } from '../../store/User'

export const App = observer(() => {
    const { token, role } = user.user;
    const [ready, setReady] = useState(false)
    const isAuthenticated = !!token;

    const routes = Routes(isAuthenticated, role);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.token && data.userId && data.role) {
            user.login(data.token, data.userId, data.role)
        }
        setReady(true)
    }, [])
    if(!ready){
        return <Spiner/>
    }
    if(isAuthenticated){
        return (
            <>
                <Router>
                    <MainPage>
                        {routes}
                    </MainPage>
                </Router>
            </>
        )
    }else {
        return (
            <>
                    <Router>
                            {routes}
                    </Router>
            </>
        )
    }

})

