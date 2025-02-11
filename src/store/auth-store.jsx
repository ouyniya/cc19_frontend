import { create } from "zustand"
import { actionLogin } from "../api/auth";
import { persist } from "zustand/middleware"

// step 1 create store
const authStore = (set) => ({
    user: [],
    token: null,
    actionLoginWithZustand: async (value) => {
        // login code
        try {
            const res = await actionLogin(value)
            const { payload, token } = res.data
            // console.log(payload)
            
            set({ user: payload, token: token })
            // console.log(payload.role)

            return { success: true, role: payload.role, firstName: payload.firstName }
            
        } catch (error) {
            // console.log(error)
            return { success: false, error: error.response.data.message }
        }

    }
})

// step 2 export store 
const useAuthStore = create(persist(authStore, {name: 'auth-store'}))

export default useAuthStore;