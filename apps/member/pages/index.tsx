import MemberStatus from '../components/MemberStatus';
import LoginForm from '../components/LoginForm';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="max-w-5xl grid gap-5 mx-auto my-5">
      <MemberStatus />
      <LoginForm />
    </div>
  );
}

export default Index;
