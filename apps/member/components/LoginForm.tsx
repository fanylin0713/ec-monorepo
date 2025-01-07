import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../zodSchema/login';

type FormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(isSubmitting);
    console.log(data);

    const userRes = await fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.userName,
        password: data.password,
      }),
    });
    const userData = await userRes.json();

    console.log(userData);
  };

  return (
    <div className="w-fit relative p-1 border-4 border-dashed border-violet-400">
      <div className="border rounded border-gray-400 p-3 w-96">
        <Link href="/">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/ac.ezimport.co.jp/image/bibianlogo.svg?t=1`}
            alt="Bibian Logo"
            width={260}
            height={70}
            className="mx-auto"
          />
        </Link>
        <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <input
              {...register('userName', { required: true })}
              id="userName"
              name="userName"
              type="text"
              className="peer h-12 px-2.5 w-full rounded border border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
              placeholder="john@doe.com"
              autoComplete="off"
            />
            {errors?.userName && (
              <p className="text-red-500 text-sm">
                {errors?.userName?.message}
              </p>
            )}
            <label
              htmlFor="userName"
              className="absolute bg-white -top-2.5 left-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-sm peer-focus:text-gray-600"
            >
              使用者名稱
            </label>
          </div>

          <div className="relative mt-7">
            <input
              {...register('password', { required: true })}
              id="password"
              type="password"
              name="password"
              className="peer h-12 px-2.5 w-full rounded border border-gray-300 text-gray-900 placeholder-transparent focus:outline-none"
              placeholder="Password"
            />
            {errors?.password && (
              <p className="text-red-500 text-sm">
                {errors?.password?.message}
              </p>
            )}
            <label
              htmlFor="password"
              className="absolute bg-white -top-2.5 left-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:bg-white peer-focus:text-sm peer-focus:text-gray-600"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-16 block w-full cursor-pointer rounded bg-sky-500 px-4 py-2 text-center font-semibold text-white hover:bg-sky-400 disabled:opacity-70"
          >
            Sign In{isSubmitting && ' (loading)'}
          </button>
        </form>

        <a
          href="#"
          className="mt-1 block text-right text-sm font-medium text-sky-600 underline"
        >
          忘記密碼
        </a>
      </div>
    </div>
  );
}

export default LoginForm;
