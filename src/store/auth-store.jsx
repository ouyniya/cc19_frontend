import { create } from "zustand"
import { actionLogin } from "../api/auth";

// step 1 create store
const authStore = () => ({
    user: [],
    token: null,
    actionLoginWithZustand: () => {
        console.log("Hello, Zustand") // for testing
        // login code
    }
})

// step 2 export store 
const useAuthStore = create(authStore)

export default useAuthStore;