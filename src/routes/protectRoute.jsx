import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/auth-store'
import { actionCurrentUser } from '../api/auth'

function protectRoute({ el, allows }) {
    // console.log("protect routes...")

    const [ok, setOk] = useState(null)
    
    // collect user, token
    const user = useAuthStore(state => state.user)
    const token = useAuthStore(state => state.token)

    // console.log(user.role, token) // admin, token

    useEffect(() => {
        checkPermission()
    }, [])

    // verify token
    const checkPermission = async () => {

        // console.log("check permission")

        try {
            const res = await actionCurrentUser(token);
            // role from backend
            // console.log(res.data.result.role)
            const role = res.data.result.role

            setOk(allows.includes(role) ? true : false)
            // if (allows.includes(role)) {
            //     setOk(true)
            // } else {
            //     setOk(false)
            // }

        } catch (error) {
            // console.log(error)

            setOk(false)
        }
    }

    if (ok === null) {
        return <h1>Loading...</h1>
    } 

    if (!ok) {
        return <h1>Unauthorized!!!</h1>
    }

  return (
    <>{ el }</>
  )
}

export default protectRoute