import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { AssetCollectionItems } from 'src/@types/assetCollection';
import { IVersionQuery, IVersionReqContext } from '../versions/types';
//
const BASE_URL = process.env.NEXTAUTH_URL;
//
export type IAssetCollections = {
  creatorAddress: string;
};
//
export default async (req: NextApiRequest, res: NextApiResponse<AssetCollectionItems[]>) => {
  const { creatorAddress } = req.query as IAssetCollections;
  //
  const assets = [] as AssetCollectionItems[];
  const size = 100;
  let cntTotalPages = 0;
  let cntPage = -1;
  //
  while (cntTotalPages !== cntPage) {
    cntPage += 1;
    // eslint-disable-next-line no-await-in-loop
    const response = await axios.get(`${BASE_URL}/api/registry/versions`, {
      params: { creatorAddress, cntPage, size } as IVersionQuery,
    });
    if (response.status === 200) {
      const { content, totalPages } = response.data as IVersionReqContext;
      cntTotalPages = totalPages;
      content.map((item) =>
        assets.push({
          chain: item.assetCollection.nftCollection.chain,
          avatarName: item.assetCollection.name,
          creator: item.assetCollection.creator.address,
          collectionAdress: item.assetCollection.nftCollection.address,
          versionID: item.id.toString(),
          version: item.version.toString(),
          linkedNFT: item.assetCollection.nftCollection.collectionName,
          supportedTokenCount: item.tokens,
          createdDate: item.assetCollection.createdAt,
        } as AssetCollectionItems)
      );
    }
  }
  res.status(200).json(assets);
};
