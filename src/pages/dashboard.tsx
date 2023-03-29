import React, { useEffect } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import WalletConnectionRequirement from 'src/sections/WalletConnectionRequirement';
import MainLayout from 'src/layouts/main/MainLayout';
import Router from 'next/router';
import { getServerSession } from 'next-auth';
import AuthGuard from 'src/auth/AuthGuard';
import { authOptions } from './api/auth/[...nextauth]';

Dashboard.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      address: session?.user?.name || '',
      session,
    },
  };
};

type DashboardProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Dashboard({ address }: DashboardProps) {
  const { data: session, status } = useSession();
  console.log(status);
  console.log(session);

  return (
    <AuthGuard>
      <>{address}</>
    </AuthGuard>
  );
}
