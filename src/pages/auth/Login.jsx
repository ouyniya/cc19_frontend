// import axios from 'axios';
// import React, { useState } from 'react'
import { createAlert } from '../../utils/createAlert'
import { useForm } from 'react-hook-form'
import FormInput from '../../components/form/FormInput';
import Buttons from '../../components/form/Buttons';
import { useNavigate } from "react-router"

// validator
import { loginSchema } from '../../utils/validators';
import { zodResolver } from '@hookform/resolvers/zod'
import useAuthStore from '../../store/auth-store';


function Login() {

    // zustand
    const actionLoginWithZustand = useAuthStore(state => state.actionLoginWithZustand)
    // console.log(actionLoginWithZustand) // obj in store

    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } = useForm({
      resolver: zodResolver(loginSchema)
    })

    const { isSubmitting, errors } = formState;

    const hdlSubmit = async (value) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      try {
        const res = await actionLoginWithZustand(value)
        // console.log(res.user)
        const firstName = res?.firstName

        if (res.success) {
          roleRedirect(res.role)
          reset()

          createAlert("success", `Welcome back, ${firstName}`)
        } else {
          createAlert("error", "Something wrong")
        }

        // const res = await actionLogin(value)
        // console.log(res.data)
        // const  role = res.data.payload.role

        // roleRedirect(role)
        // reset()
        // createAlert("success","Log in Success")
        
      } catch (error) {
        createAlert("error", error.response?.data.message)
      }
    }

    const roleRedirect = (role) => {
        if (role === "ADMIN") {
          navigate('/admin')
        } else {
          navigate('/user')
        }
    }

  return (
   <div className='flex w-full h-full justify-end pt-2.5'>
    <div className='w-64 border p-4 rounded-md'>
      <h1 className='text-xl font-bold text-center pb-2'>Login</h1>
      <form onSubmit={handleSubmit(hdlSubmit)}>
        <div className='mb-2'>

          <FormInput register={register} name="email" type="email" errors={errors} />
          <FormInput register={register} name="password" type="password" errors={errors} />

          <Buttons isSubmitting={isSubmitting}
          label="Log in" />
        </div>
      </form>
    </div>
   </div>
  )
}

export default Login