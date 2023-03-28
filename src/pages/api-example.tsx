import { Button } from '@mui/material';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getToken } from 'next-auth/jwt';
import { getCsrfToken, getSession, signIn, useSession } from 'next-auth/react';
import MainLayout from 'src/layouts/main/MainLayout';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const token = await getToken({ req: context.req });

  const address = token?.sub ?? null;

  return {
    props: {
      address,
      session,
    },
  };
};

ApiExamplePage.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

type AuthenticatedPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function ApiExamplePage(pagepPops: AuthenticatedPageProps) {
  return (
    <div>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src="/api/examples/session" title="test1" />
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      <iframe src="/api/examples/jwt" title="test2" />
    </div>
  );
}
