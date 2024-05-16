import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export const AppRoutes = () => {

    return(
        // Definindo as rotas por onde os clientes vão fazer a navegação pelo site
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Navigate to={'/home'}/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/register' element = {<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}