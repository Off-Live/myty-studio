import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { stringify } from 'querystring';
import { IAsset, IAssetsRequestQuery } from './types';
//
const BASE_URL = process.env.MYTY_REGISTRY;
const ASSET_END_POINT = '/v1/assets';
//
export default async (req: NextApiRequest, res: NextApiResponse<IAsset[]>) => {
  const query = req.query as IAssetsRequestQuery;
  query.size = query.size || 1000;
  const { empty, totalElement } = await getEmptyAndTotalElement({ ...query, page: 0, size: 1 });
  if (empty) res.status(200).json([]);
  else {
    const pasgeNumber = Math.ceil(totalElement / query.size);
    const requests = new Array(pasgeNumber)
      .fill(0)
      .map((_, i) =>
        axios.get(`${BASE_URL + ASSET_END_POINT}?${stringify({ ...query, page: i })}`)
      );
    const responses = await Promise.all(requests);
    res.status(200).json(responses.flatMap((response) => response.data.content));
  }
};
//
const getEmptyAndTotalElement = async (
  query: IAssetsRequestQuery
): Promise<{ empty: boolean; totalElement: number }> => {
  const res = await axios.get(`${BASE_URL + ASSET_END_POINT}?${stringify(query)}`);
  return { empty: res.data.empty, totalElement: res.data.totalElements };
};
