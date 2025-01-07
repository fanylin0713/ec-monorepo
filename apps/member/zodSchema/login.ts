import z from 'zod';

export const loginSchema = z.object({
  userName: z.string({ message: '請輸入使用者名稱' }),
  password: z
    .string()
    .min(8, '密碼至少需要 8 個字')
    .max(20, '密碼最多只能 20 個字'),
});

export type User = z.infer<typeof loginSchema>;
