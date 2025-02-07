import React from 'react'
import { Outlet } from 'react-router'
import MainNav from '../components/MainNav'

function Layout() {
  return (
    <> 
        <MainNav />
        <Outlet />

       
        <h1>Footer</h1>
    </>
  )
}

export default Layout