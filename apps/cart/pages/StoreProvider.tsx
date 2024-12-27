import { useRef } from 'react';
import { Provider } from 'react-redux';
import { cartStore, AppStore } from '../lib/store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = cartStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
