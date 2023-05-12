import { sub } from 'date-fns';
import { useRouter } from 'next/router';

type userBaseURLReturn = { baseURL: string; subPath: string };

export default function useBaseURL(): userBaseURLReturn {
  const { asPath } = useRouter();
  //
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  return { baseURL: origin, subPath: asPath };
}
