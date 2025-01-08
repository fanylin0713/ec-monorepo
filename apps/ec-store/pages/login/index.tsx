import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('member/LoginForm'));

export function Login() {
  return (
    <div className="flex justify-center my-10">
      <LoginForm />
    </div>
  );
}

export default Login;
