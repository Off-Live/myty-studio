export type UploadAvatarPutParams = {
  chain: string;
  nftCollectionAddress: string;
  creatorAddress: string;
  name: string;
  kitVersion: string;
  type: 'TYPE_UNITYPACKAGE' | 'TYPE_MYTY' | 'TYPE_MYTYC' | string;
};

export type UnloadAvatarPutRes = {
  key: string;
};
