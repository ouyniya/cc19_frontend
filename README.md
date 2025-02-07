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

## Step 4 Sweet alert
