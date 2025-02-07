import React from 'react'
import { Link } from "react-router"

function MainNav() {
  return (
    <>
    <div className='flex gap-5 align-middle justify-between h-20 pt-5 bg-indigo-950'>
        <div className='flex'>
            <p className='text-amber-50 pt-1 pl-2'>logo</p>
        </div>
        <div className='flex gap-5 align-middle justify-center'>
            <Link to="/" className='btn btn-primary'>Home</Link>
            <Link to="/" className='btn btn-primary'>About</Link>
        </div>
        <div className='flex gap-5 align-middle justify-center'>
            <Link to="/register" className='btn btn-outline btn-accent'>Register</Link>
            <Link to="/login" className='btn btn-outline btn-info'>Login</Link>
        </div>
    </div>
    </>
  )
}

export default MainNav