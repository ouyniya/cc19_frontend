import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email("email invalid"),
    firstName: z.string().min(3, "firstName must > 3"),
    lastName: z.string().min(3, "lastName must > 3"),
    password: z.string().min(6, "password must > 6"),
    confirmPassword: z.string().min(6, "password must > 6")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password not match",
    path: ["confirmPassword"]
});


export const loginSchema = z.object({
    email: z.string().email("email invalid"),
    password: z.string().min(6, "password must > 6")
});