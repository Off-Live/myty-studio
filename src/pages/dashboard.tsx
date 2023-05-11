import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
//
import MainLayout from 'src/layouts/main/MainLayout';
import { getServerSession } from 'next-auth';
import AuthGuard from 'src/auth/AuthGuard';
import { myCollectionsDashboardItems } from 'src/_mock/assets';
import { CollectionDashboard } from 'src/sections/dashboard';
import { TableHeadLabel } from 'src/components/table/TableHeadCustom';
import axios from 'axios';
import { AssetCollectionItems } from 'src/@types/assetCollection';
import useDevEnv from 'src/hooks/useDevEnv';
import { string } from 'yup';
import { PATH_PAGE } from 'src/routes/paths';
import { authOptions } from './api/auth/[...nextauth]';
import { IVersionQuery, IVersionReqContext } from './api/registry/versions/types';
import { IAssetCollections } from './api/registry/assetCollections';
//
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
//
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const assetCollection = new Array<AssetCollectionItems>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const devEnv = useDevEnv();
  const viewerLink = (collectionAdress: string | undefined, versionID: string | undefined) => {
    if (collectionAdress && versionID)
      return `${PATH_PAGE.avatarviewer}/registry?id=${versionID}&nftCollectionAddress=${collectionAdress}`;
    return PATH_PAGE.avatarviewer;
  };
  const formatCreatedDate = (apiFormat: string): string =>
    new Date(apiFormat).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  //
  if (session?.user?.name) {
    const creatorAddress = (
      devEnv === 'production' ? session!.user!.name : '0xDAFCe4AcC2703A24F29d1321AdAADF5768F54642'
    ) as string;
    const versionQuery: IAssetCollections = { creatorAddress };
    const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/registry/assetCollections`, {
      params: versionQuery,
    });
    if (response.status === 200) {
      assetCollection.push(
        ...response.data.map((assetCollectionItem: AssetCollectionItems) => ({
          ...assetCollectionItem,
          viewerURL: viewerLink(
            assetCollectionItem.collectionAdress,
            assetCollectionItem.versionID
          ),
          createdDate: formatCreatedDate(assetCollectionItem.createdDate),
        }))
      );
    }
  }
  //
  return {
    props: {
      assetCollection,
    },
  };
};
//
Dashboard.getLayout = (page: React.ReactElement) => <MainLayout> {page} </MainLayout>;
//
type DashboardProps = InferGetServerSidePropsType<typeof getServerSideProps>;
//
export default function Dashboard({ assetCollection }: DashboardProps) {
  console.log(assetCollection);

  return (
    <AuthGuard>
      <CollectionDashboard
        assetCollectionItems={assetCollection}
        tableHeaderProps={{ headLabel: TABLE_HEAD }}
      />
    </AuthGuard>
  );
}
