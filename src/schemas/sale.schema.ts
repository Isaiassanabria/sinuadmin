import { z } from "zod";

export const saleProductSchema = z.object({
  id: z.number().positive(),
  quantity: z.number().positive().int(),
});

export const saleSchema = z.object({
  id: z.number().positive().optional(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  products: z.array(saleProductSchema),
  total: z.number().positive(),
});

export type TSaleProductSchema = z.infer<typeof saleProductSchema>;
export type TSaleSchema = z.infer<typeof saleSchema>;
