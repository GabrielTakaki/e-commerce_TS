import { object, string, ref, number } from "yup";

export const userSchema = object({
  body: object({
    name: string().required('Name is required'),
    email: string().email('Must be a valid email').required('Email is required'),
    password: string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    passwordConfirmation: string().oneOf([ref('password'), null], 'Passwords must match'),
  }),
});

export const loginSchema = object({
  body: object({
    email: string().email('Must be a valid email').required('Email is required'),
    password: string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
  }),
});

export const productSchema = object({
  body: object({
    name: string().required('Name is required'),
    price: number().required('Price is required'),
    quantity: number().required('Quantity is required'),
    image: string(),
    description: string().min(10, 'Description must be at least 10 characters long'),
  }),
});
