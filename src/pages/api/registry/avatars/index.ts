import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
//
const BASE_URL = process.env.MYTY_REGISTRY;
const END_POINT = '/v1/assets/';
//
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      axios
        .put(`${BASE_URL}${END_POINT}`, body)
        .then((response) => {
          if (response.status === 200) {
            res.status(200).json(response.data);
          } else {
            res.status(500).end();
          }
        })
        .catch((error) => {
          res.status(500).end();
        });
      break;
    default:
      res.status(405).end();
  }
};
