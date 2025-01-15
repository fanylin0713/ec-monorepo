import { useEffect } from 'react';
import Link from 'next/link';
import { setCookie, getCookie } from 'cookies-next';
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

  const logout = () => {
    setCookie('userInfo', null, {
      secure: true,
      maxAge: 0,
    });
    dispatch(setUserInfo({ id: 0, name: '', email: '' }));
  };

  return (
    <div className="w-fit relative p-1 border-4 border-dashed border-violet-400">
      {userInfo.id === 0 ? (
        <Link href="/login" className="font-medium hover:text-sky-600">
          登入
        </Link>
      ) : (
        <div className="flex items-center">
          <p>Hello, {userInfo.name}</p>
          <p className="mx-2">|</p>
          <button className="font-medium hover:text-sky-600" onClick={logout}>
            登出
          </button>
        </div>
      )}
    </div>
  );
}

export default MemberStatus;
