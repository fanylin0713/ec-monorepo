import React, { lazy } from 'react';

const LoginForm = lazy(() => import('member/LoginForm'));

export function Login() {
  return (
    <div className="flex justify-center my-10">
      <LoginForm />
    </div>
  );
}

export default Login;
