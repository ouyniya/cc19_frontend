import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
// import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import HomeUser from '../pages/user/HomeUser'
import Register1 from '../pages/auth/Register1'

function AppRoutes() {

  return (
    <>
        <Routes>
            {/* public */}
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='register' element={<Register1 />} />
              <Route path='login' element={<Login />} />
            </Route>


            {/* Private: user */}
            <Route path='user'>
              <Route index element={<HomeUser />} />
            </Route>


            {/* Private: Admin */}
            <Route path='admin'>
              <Route index element={<Dashboard />} />
              <Route path='manage' element={<Manage />} />
            </Route>

            <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
    </>
  )
}

export default AppRoutes
