import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// components
import { useSession } from 'next-auth/react';
import WalletConnectionRequirement from 'src/sections/WalletConnectionRequirement';
import LoadingScreen from '../components/loading-screen';

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { status } = useSession();
  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
    if (status === 'authenticated') {
      setRequestedLocation(null);
    }
  }, [requestedLocation, pathname, setRequestedLocation, status, push]);

  if (status === 'loading') {
    return <LoadingScreen />;
  }

  if (status === 'unauthenticated') {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <WalletConnectionRequirement />;
  }

  return <> {children} </>;
}
