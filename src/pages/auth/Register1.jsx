// import axios from 'axios';
// import React, { useState } from 'react'
import { createAlert } from '../../utils/createAlert'
import { useForm } from 'react-hook-form'
import FormInput from '../../components/form/FormInput';
import Buttons from '../../components/form/Buttons';

// validator
import { registerSchema } from '../../utils/validators';
import { zodResolver } from '@hookform/resolvers/zod'
import { actionRegister } from '../../api/auth';

function Register1() {

    const { register, handleSubmit, formState, reset } = useForm({
      resolver: zodResolver(registerSchema)
    })
    const { isSubmitting, errors } = formState;
    // console.log(errors)

    const hdlSubmit = async (value) => {
      //   e.preventDefault()
      await new Promise((resolve) => setTimeout(resolve, 1000))

      try {
        const res = await actionRegister(value)
        reset()
        createAlert("success","Register Success")
        
      } catch (error) {
        createAlert("error", error.response?.data.message)

        // console.log(error.response.data.message)
      }
    }

  return (
   <div className='flex w-full h-full justify-end pt-2.5'>
    <div className='w-64 border p-4 rounded-md'>
      <h1 className='text-xl font-bold text-center pb-2'>Register</h1>
      <form onSubmit={handleSubmit(hdlSubmit)}>
        <div className='mb-2'>

          <FormInput register={register} name="email" type="email" errors={errors} />
          <FormInput register={register} name="firstName" type="text" errors={errors} />
          <FormInput register={register} name="lastName" type="text" errors={errors} />
          <FormInput register={register} name="password" type="password" errors={errors} />
          <FormInput register={register} name="confirmPassword" type="password" errors={errors} />

          <Buttons isSubmitting={isSubmitting}
          label="Register" />
        </div>
      </form>
    </div>
   </div>
  )
}

export default Register1