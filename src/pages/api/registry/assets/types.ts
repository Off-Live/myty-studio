export type IAssetsGetQuery = {
  chain?: string;
  nftCollectionAddress?: string;
  collectionId?: number;
  name?: string;
  tokenIds?: string;
  creatorAddress?: string;
  kitVersion?: string;
  page?: number;
  size?: number;
  direction?: string;
  sort?: string;
};

export type IAsset = {
  id: string;
  tokenId: string;
  assetUri: string;
  tags: string[];
};

export type IAssetsPostParams = {
  chain: string;
  nftCollectionAddress: string;
  creatorAddress: string;
  name: string;
  kitVersion: string;
  type: 'TYPE_UNITYPACKAGE' | 'TYPE_MYTY' | 'TYPE_MYTYC' | string;
};

export type IAssetsPutResponse = {
  key: string;
};
