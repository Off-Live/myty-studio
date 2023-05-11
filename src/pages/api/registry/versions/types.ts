export type IVersionQuery = {
  chain?: string;
  nftCollectionAddress?: string;
  creatorAddress?: string;
  collectionId?: number;
  name?: string;
  version?: string;
  kitVersion?: string;
  status?: 'SUBMITTED' | 'VERIFIED' | 'REJECTED' | string;
  tag?: string;
  page?: number;
  size?: number;
  direction?: string;
  sort?: string;
};

export type IVersionReqContext = {
  totalElements: number;
  totalPages: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    paged: boolean;
    unpaged: boolean;
    offset: number;
  };
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  content: Array<{
    id: number;
    version: number;
    description: string;
    status: 'SUBMITTED' | 'VERIFIED' | 'REJECTED' | string;
    kitVersion: {
      id: number;
      major: number;
      minor: number;
      patch: number;
    };
    assetUri: string;
    assetCollection: {
      id: number;
      name: string;
      creator: {
        id: number;
        address: string;
      };
      nftCollection: {
        id: number;
        chain: string;
        address: string;
        collectionName: string;
        symbol: string;
        baseUri: string;
        firstTokenUri: string;
      };
      createdAt: string;
      updatedAt: string;
      expiredAt: string;
      isOfficial: boolean;
      createdBy: string;
      updatedBy: string;
    };
    tags: Array<{
      id: number;
      category: string;
      label: string;
      value: string;
    }>;
    tokens: number;
  }>;
  empty: boolean;
};
