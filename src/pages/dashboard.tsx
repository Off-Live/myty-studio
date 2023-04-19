import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import MainLayout from 'src/layouts/main/MainLayout';
import { getServerSession } from 'next-auth';
import AuthGuard from 'src/auth/AuthGuard';
import { myCollectionsDashboardItems } from 'src/_mock/assets';
import { CollectionDashboard } from 'src/sections/dashboard';
import { TableHeadLabel } from 'src/components/table/TableHeadCustom';
import { authOptions } from './api/auth/[...nextauth]';

const TABLE_HEAD: TableHeadLabel[] = [
  { id: 'chain-icon', label: '', align: 'center' },
  { id: 'avatar-creator', label: 'Avatar Name / Creator', align: 'left' },
  { id: 'version', label: 'Version', align: 'left' },
  { id: 'linked-nft', label: 'Linked NFT', align: 'left' },
  { id: 'token-id', label: 'Support Range', align: 'right' },
  { id: 'created', label: 'Created', align: 'left' },
  { id: 'compatiblity', label: 'Compatiblity', align: 'center' },
  { id: 'format', label: 'Format', align: 'left' },
  { id: 'empty', label: '', align: 'left' },
];

Dashboard.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // TODO: ***** mockup data *****
  const session = await getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      assetCollection: myCollectionsDashboardItems,
    },
  };
};

type DashboardProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Dashboard({ assetCollection }: DashboardProps) {
  return (
    <AuthGuard>
      <CollectionDashboard
        assetCollectionItems={assetCollection}
        tableHeaderProps={{ headLabel: TABLE_HEAD }}
      />
    </AuthGuard>
  );
}
