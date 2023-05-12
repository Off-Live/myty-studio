import { ethereumAddress } from './wallet';

export type SupportAddress = ethereumAddress;
export type SupportedChain = 'ethereum' | 'polygon';
export type AvatarType = '2D' | '3D';
export type AvatarCompatibility = '2D' | 'Head' | 'Body';
export type TokenID = string;
export type Date = string;

export type AssetCollectionItems = {
  chain: SupportedChain;
  avatarName: string;
  creator: SupportAddress;
  collectionAdress: SupportAddress;
  versionID?: string;
  version: string;
  linkedNFT: string;
  supportedTokenId?: TokenID[];
  supportedTokenCount: number;
  createdDate: Date;
  compatiblity: AvatarCompatibility[];
  format: string;
  thumbnailImage?: string;
  viewerURL?: string;
};
