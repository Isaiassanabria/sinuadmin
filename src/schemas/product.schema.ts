import { z } from "zod";

export const productSchema = z.object({
  id: z.number().positive().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  image: z.string().url(),
  description: z.string(),
  price: z.number().positive(),
  stock: z.number().int().nonnegative(),
});

export type TProductSchema = z.infer<typeof productSchema>;
