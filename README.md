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

