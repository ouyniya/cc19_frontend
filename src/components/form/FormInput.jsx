import React from 'react'

function FormInput({ register, name, type="text", errors }) {

  // console.log(errors[name]?.message)
  // first true || 
  // first false &&

  return (
    <>

    <input
            placeholder={ name }
            type={ type }
            {...register(name)}
            className='border w-full rounded p-1 mb-3'
            />
    {
      errors[name] && <pre className='pt-1 pb-3 text-sm text-red-600'>{errors[name].message}</pre>
    }
    </>
  )
}

export default FormInput;