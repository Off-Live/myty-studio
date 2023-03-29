import { ethereumAddress } from './wallet';

export type SupportAddress = ethereumAddress;
export type SupportedTokenType = 'All' | 'Custom';
export type TokenID = string;
export type Date = string;
export type AvatarCompatibility = '2D' | 'FaceAR' | 'VR';

export type AssetCollectionItems = {
  avatarName: string;
  creator: SupportAddress;
  version: string;
  linkedNFT: string;
  supportedTokenType: SupportedTokenType;
  supportedTokenId?: TokenID[];
  createdDate: Date;
  compatiblity: AvatarCompatibility[];
  format: string;
  thumbnailImage?: string;
};
