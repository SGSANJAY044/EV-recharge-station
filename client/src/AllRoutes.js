import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserHome from './pages/UserHome'
import AdminHome from './pages/AdminHome'
import UserMap from './pages/UserMap'
import AdminControl from './pages/AdminControl'
import AdminMap from './pages/AdminMap'
function AllRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<Signup/>}/>
            <Route path='/user/home' element={<UserHome/>}/>
            <Route path='/admin/home' element={<AdminHome/>}/>
            <Route path='/user/map' element={<UserMap/>}/>
            <Route path='/admin/control' element={<AdminControl/>}/>
            <Route path='/admin/map' element={<AdminMap/>}/>
        </Routes>
    )
}

export default AllRoutes
