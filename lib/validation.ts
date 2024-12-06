import { z } from "zod";

export const UserFormValidation = z.object({
  UserName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  Password: z
    .string()
    .min(6, "Password must be at least 6 characters")
});

export const CustomerFromValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  address: z
    .string()
    .min(2, "Address must be at least 2 characters")
    .max(150, "Address must be at most 150 characters"),
  number: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .refine((val) => /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(val), {
      message: "Invalid phone number format",
    })
});