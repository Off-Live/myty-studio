import { ethereumAddress } from './wallet';

export type SupportAddress = ethereumAddress;
export type SupportedChain = 'Ethereum' | 'Polygon';
export type TokenID = string;
export type Date = string;
export type AvatarCompatibility = '2D' | 'Head' | 'Body';

export type AssetCollectionItems = {
  chain: SupportedChain;
  avatarName: string;
  creator: SupportAddress;
  collectionAdress: SupportAddress;
  version: string;
  linkedNFT: string;
  supportedTokenId: TokenID[];
  createdDate: Date;
  compatiblity: AvatarCompatibility[];
  format: string;
  thumbnailImage?: string;
};
