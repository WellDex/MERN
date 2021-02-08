import React from 'react'
import {useRoutes} from "./routes"
import {useAuth} from "./hooks/authHook"
import {BrowserRouter} from "react-router-dom"
import {AuthContext} from "./context/AuthContext"
import {Navbar} from "./components/common/Navbar"
import {Preloader} from "./components/common/Preloader"
import 'materialize-css'


function App() {
    const {token, login, logout, userId, ready, email} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(isAuth, email)

    if (!ready) {
        return <Preloader/>
    }
    return (
        <AuthContext.Provider value={{token, userId, login, logout, isAuth, email}}>
            <BrowserRouter>
                {isAuth && <Navbar/>}
                <div className="container">
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
