export type IAssetsRequestQuery = {
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
