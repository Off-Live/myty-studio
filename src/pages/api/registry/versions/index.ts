import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { IVersionQuery, IVersionReqContext } from './types';
//
const BASE_URL = process.env.MYTY_REGISTRY;
const END_POINT = '/v1/assets/versions';
//
export default (req: NextApiRequest, res: NextApiResponse<IVersionReqContext>) => {
  const query = req.query as IVersionQuery;
  axios
    .get(`${BASE_URL}${END_POINT}`, { params: query })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500);
    });
};
