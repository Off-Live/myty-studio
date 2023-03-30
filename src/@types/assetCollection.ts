import { ethereumAddress } from './wallet';

export type SupportAddress = ethereumAddress;
// export type SupportedTokenType = 'All' | 'Custom';
export type TokenID = string;
export type Date = string;
export type AvatarCompatibility = '2D' | 'Head only' | 'Full body';

export type AssetCollectionItems = {
  avatarName: string;
  creator: SupportAddress;
  collectionAdress: SupportAddress;
  version: string;
  linkedNFT: string;
  // supportedTokenType: SupportedTokenType;
  supportedTokenId: TokenID[];
  createdDate: Date;
  compatiblity: AvatarCompatibility[];
  format: string;
  thumbnailImage?: string;
};
