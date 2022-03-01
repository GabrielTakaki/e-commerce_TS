import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { decode } from '../utils/jwt';
import { reIssueAccessToken } from "../service/session.services";

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies['accessToken'];

  const refreshToken = req.cookies['refreshToken'];

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = await decode(accessToken);

  if (decoded) {
    // @ts-ignore
    req.user = decoded;

    return next();
  }

  if (expired && refreshToken) {
    const newAccess = await reIssueAccessToken({ refreshToken });
    console.log(req.cookies);

    if (newAccess) {
      res.setHeader('x-access-token', newAccess);

      const { decoded } = decode(newAccess);

      // @ts-ignore
      req.user = decoded;
    }

    return next();
  }

  return next();
};

export default deserializeUser;
