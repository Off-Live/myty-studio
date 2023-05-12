import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { stringify } from 'querystring';
import { IAsset, IAssetsGetQuery, IAssetsPutResponse } from './types';
//
const BASE_URL = process.env.MYTY_REGISTRY;
const ASSET_END_POINT = '/v1/assets';
//
export default async (req: NextApiRequest, res: NextApiResponse<IAsset[] | IAssetsPutResponse>) => {
  const { method } = req;
  switch (method) {
    case 'POST':
      await handlerPOST(req, res);
      break;
    case 'GET':
      await handlerGET(req, res);
      break;
    default:
      res.status(405).end();
  }
};
//
const handlerPOST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  axios
    .post(`${BASE_URL + ASSET_END_POINT}`, body)
    .then((response) => {
      if (response.status === 200) {
        res.status(200).json(response.data);
      } else {
        res.status(500).end();
      }
    })
    .catch((error) => {
      res.status(500).end(JSON.stringify(error.response.data));
    });
};

const handlerGET = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query as IAssetsGetQuery;
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
  query: IAssetsGetQuery
): Promise<{ empty: boolean; totalElement: number }> => {
  const res = await axios.get(`${BASE_URL + ASSET_END_POINT}?${stringify(query)}`);
  return { empty: res.data.empty, totalElement: res.data.totalElements };
};
