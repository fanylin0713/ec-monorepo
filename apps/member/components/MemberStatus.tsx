import { useEffect } from 'react';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/hooks';
import { setUserInfo } from '../lib/features/MemberSlice';

export function MemberStatus() {
  const dispatch = useDispatch();
  const { userInfo } = useAppSelector((state) => state.member);

  useEffect(() => {
    const userInfoCookie = getCookie('userInfo');
    if (userInfoCookie) {
      dispatch(setUserInfo(JSON.parse(userInfoCookie as string)));
    }
  }, []);

  return (
    <div className="w-fit relative p-1 border-4 border-dashed border-violet-400">
      {userInfo.id === 0 ? (
        <Link href="/login">登入</Link>
      ) : (
        <div>Hello, {userInfo.name}</div>
      )}
    </div>
  );
}

export default MemberStatus;
