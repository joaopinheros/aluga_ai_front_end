import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { RegisterClient } from "../pages/RegisterClient"
import { CarsDetails } from "../pages/CarsDetails"
import { RegisterCar } from "../pages/RegisterCar"

export const AppRoutes = () => {

    return(
        // Definindo as rotas por onde os clientes vão fazer a navegação pelo site
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Navigate to={'/home'}/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/register' element = {<RegisterClient/>}/>
                <Route path='/vehicle' element={<CarsDetails/>}/>
                <Route path='/register-vehicle' element={<RegisterCar/>}/>
            </Routes>
        </BrowserRouter>
    )
}