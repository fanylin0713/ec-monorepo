import z from 'zod';

export const orderSchema = z.object({
  quantityLack: z.string().min(1),
  priceGrowth: z.string().min(1),
  test: z.string(),
});

export type Order = z.infer<typeof orderSchema>;
