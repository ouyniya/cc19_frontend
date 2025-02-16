# Client

## Step 1 Install Vite

create folder client

```bash
npm create vite .
npm install
npm run dev
```

## Step 2
install tailwindcss

https://tailwindcss.com/docs/installation/using-vite 

```bash
npm install tailwindcss @tailwindcss/vite
```

### update `vite.config.js`
Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.
```js
@import "tailwindcss";
```

test code in `App.jsx`
```html
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
```

## Step 3 Install React-Router

```bash
npm i react-router
```

### update `main.jsx`

```js
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
```

## Step 4 create Routes > `AppRoutes.jsx`

```js
import React from 'react'
import { Route, Routes } from 'react-router'

function AppRoutes() {
  return (
    <>
        <Routes>
            {/* public */}
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='about' element={<h1>About</h1>} />
            <Route path='register' element={<h1>Register</h1>} />
            <Route path='login' element={<h1>Login</h1>} />

            {/* Private: user */}
            <Route path='user' element={<h1>Home User</h1>} />

            {/* Private: Admin path */}
            <Route path='dashboard' element={<h1>Dashboard</h1>} />
            <Route path='manage' element={<h1>Manage</h1>} />

            <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
    </>
  )
}

export default AppRoutes
```

## create folder `layouts`
file: `Layout.jsx`

```js
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
```

## Step 4 create pages
folder create pages

files:
- About.jsx
- Home.jsx
folder
- admin
  - Dashboard.jsx
  - Manage.jsx
- auth
  - Login.jsx
  - Register.jsx
- user
  - HomeUser.jsx


### update `AppRoute.jsx`

```js
import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import HomeUser from '../pages/user/HomeUser'

function AppRoutes() {

  return (
    <>
        <Routes>
            {/* public */}
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='register' element={<Register />} />
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

```


## Step 5 Sweet alert
### create function `createAlert`
create folder `utils`

create file `createAlert.jsx`

installation

https://sweetalert2.github.io/#download

```bash
npm install sweetalert2
```

code
```js
import Swal from "sweetalert2";

export const createAlert = (icon, text) => {
    //sweet alert

    Swal.fire({
              icon: icon || "info", 
              text: text || "Something wrong",
              timer: 2000,
            })
};
```


## Step 6 React Hook Form
https://react-hook-form.com/get-started

```bash
npm install react-hook-form
```

## update `Register1.jsx`

```js
import axios from 'axios';
// import React, { useState } from 'react'
import { createAlert } from '../../utils/createAlert'
import { useForm } from 'react-hook-form'
import FormInput from '../../components/form/FormInput';

function Register1() {

    const { register, handleSubmit, formState } = useForm()
    const { isSubmitting } = formState;
    // console.log(isSubmitting)

    const hdlSubmit = async (value) => {
    //   e.preventDefault()
    await new Promise((resolve) => setTimeout(resolve, 500))

      try {
        const res = await axios.post('http://localhost:8000/api/register', value)
        createAlert("success","Register Success")
        
      } catch (error) {
        createAlert("error", error.response.data.message)

        // console.log(error.response.data.message)
      }
      
     
    }

  return (
   <div className='flex w-full h-full justify-end pt-2.5'>
    <div className='w-64 border p-4 rounded-md'>
      <h1 className='text-xl font-bold text-center pb-2'>Register1</h1>
      <form onSubmit={handleSubmit(hdlSubmit)}>
        <div className='mb-2'>

          <FormInput register={register} name="email" />
          <FormInput register={register} name="firstName" />
          <FormInput register={register} name="lastName" />
          <FormInput register={register} name="password" />
          <FormInput register={register} name="confirmPassword" />

          <button 
            type='submit'
            className='bg-blue-700 text-amber-50 p-3 rounded-xl cursor-pointer'
          >{
            isSubmitting ? <p>Loading...</p> : "Register"
          }</button>
        </div>
      </form>
    </div>
   </div>
  )
}

export default Register1
```

## Step 7 validation 

https://github.com/react-hook-form/resolvers

@client 

```bash
npm install @hookform/resolvers
npm i zod
```


## Step 8 zustand 

@client 

```bash
npm install zustand
```

### create store

create folder `store`

file `auth-store.jsx`

```js

```