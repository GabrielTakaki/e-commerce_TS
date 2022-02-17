import { Request, Response } from "express";
import log from "../logger";
import { sign } from '../utils/jwt';
import config from 'config';
import { create, createAccessToken } from '../service/session.services';
import { validatePassword } from "../service/user.services";

export const createSessionHandler = async (req: Request, res: Response) => {
  try {
    const user = await validatePassword(req.body);

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    const session = await create(user._id, req.get('user-agent') || '');

    const accessToken = createAccessToken({
      user,
      session,
    });

    const refreshToken = sign(session, {
      expiresIn: config.get('refreshTokenExpiration'),
    });
    
  } catch (e: any) {
    log.error(e);
    return res.status(400).send(e.errors);
  }
};
