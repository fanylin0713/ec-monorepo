import z from 'zod';

export const loginSchema = z.object({
  userName: z.string().min(1, '請輸入使用者名稱'),
  password: z.string().min(1, '請輸入使用者密碼'),
});

export type User = z.infer<typeof loginSchema>;
