import axios from 'axios';
import React, { useState } from 'react'
import { createAlert } from '../../utils/createAlert'

function Register() {

    const [ value, setValue ] = useState({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: ""
    });

    const hdlOnchange = (e) => {
      // console.log(e.target.value)
      setValue({
        ...value,
        [e.target.name]: e.target.value
      })
    }

    const hdlSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post('http://localhost:8000/api/register', value)
        createAlert("success","Register Success")
        
      } catch (error) {
        createAlert("error", error.response.data.message)

        console.log(error.response.data.message)
      }
      
      // console.log(value)
    }

    // console.log(value)

  return (
   <div className='flex w-full h-full justify-end pt-2.5'>
    <div className='w-64 border p-4 rounded-md'>
      <h1 className='text-xl font-bold text-center pb-2'>Register</h1>
      <form onSubmit={hdlSubmit}>
        <div className='mb-2'>
          <input
            type='text'
            placeholder='email'
            name='email'
            className='border w-full rounded p-1 mb-3'
            onChange={hdlOnchange}
          />
          <input
            type='text'
            placeholder='first name'
            name='firstName'
            className='border w-full rounded p-1 mb-3'
            onChange={hdlOnchange}

          />
          <input
            type='text'
            placeholder='last name'
            name='lastName'
            className='border w-full rounded p-1 mb-3'
            onChange={hdlOnchange}

          />
          <input
            type='password'
            placeholder='password'
            name='password'
            className='border w-full rounded p-1 mb-3'
            onChange={hdlOnchange}

          />
          <input
            type='password'
            name='confirmPassword'
            placeholder='confirm password'
            className='border w-full rounded p-1 mb-3'
            onChange={hdlOnchange}
          />
          <button 
            type='submit'
            className='bg-blue-700 text-amber-50 p-3 rounded-xl cursor-pointer'
          >Register</button>
        </div>
      </form>
    </div>
   </div>
  )
}

export default Register