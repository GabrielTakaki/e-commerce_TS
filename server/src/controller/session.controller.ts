import { Request, Response } from "express";
import log from "../logger";
import dayjs from "dayjs";
import { get } from "lodash";
import { sign } from '../utils/jwt';
import config from 'config';
import { create, createAccessToken, updateSession } from '../service/session.services';
import { validatePassword } from "../service/user.services";

export const createSessionHandler = async (req: Request, res: Response) => {
  try {
    const user = await validatePassword(req.body);

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    const session = await create(user._id, user.role, req.get('user-agent') || '');

    const accessToken = createAccessToken({
      user,
      session,
    });

    const refreshToken = sign(session, {
      expiresIn: config.get('refreshTokenExpiration'),
    });
    
    // return res.send({ accessToken, refreshToken });
    console.log('oi');
    return res.status(200).cookie('accessToken', accessToken, {
      secure: true,
      sameSite: 'none',
      httpOnly: true,
      // overwrite: true,
      expires: dayjs().add(7, 'day').toDate(),
    }).cookie('refreshToken', refreshToken, {
      secure: true,
      sameSite: 'none',
      httpOnly: true,
      // overwrite: true,
      expires: dayjs().add(7, 'day').toDate(),
    }).json({ accessToken, refreshToken });
  } catch (e: any) {
    log.error(e);
    return res.status(400).send(e.errors);
  }
};

export const invalidateUserHandler = async (req: Request, res: Response) => {
  const sessionId = get(req, "user.session");

  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
};
