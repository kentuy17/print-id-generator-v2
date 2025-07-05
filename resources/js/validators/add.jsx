import { z } from "zod";

export const registerSchema = z.object({
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
});

export const newEventSchema = z.object({
  eventName: z.string().min(3, "Event name must be at least 3 characters long"),
  details: z
    .string()
    .min(10, "Event details must be at least 10 characters long"),
  location: z.string().min(3, "Location must be at least 3 characters long"),
});
