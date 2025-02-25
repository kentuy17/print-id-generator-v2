import { z } from "zod";

export const registerSchema = z.object({
  // email: z.string().email(),
  firstName: z.string().min(3).max(255),
  lastName: z.string().min(3).max(255),
  phone: z
    .string()
    .min(9)
    .max(15)
    .refine((val) => !isNaN(val), {
      message: "Invalid phone number",
    }),
  nationality: z.string().min(2).max(100),
  // year: z.string().min(2).max(10),
  // password: z.string().min(6).max(100),
  // confirmPassword: z.string().min(6).max(100),
});
