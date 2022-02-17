import { object, string, ref } from "yup";

export const userSchema = object({
  body: object({
    name: string().required('Name is required'),
    email: string().email('Must be a valid email').required('Email is required'),
    password: string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    passwordConfirmation: string().oneOf([ref('password'), null], 'Passwords must match'),
  }),
});
