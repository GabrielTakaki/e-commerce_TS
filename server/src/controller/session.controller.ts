import { Request, Response } from "express";
import log from "../logger";
import { create, accessToken } from '../service/session.services';
import { validatePassword } from "../service/user.services";

export const createSessionHandler = async (req: Request, res: Response) => {
  try {
    const user = await validatePassword(req.body);

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    const session = await create(user._id, req.get('user-agent') || '');
  } catch (e: any) {
    log.error(e);
    return res.status(400).send(e.errors);
  }
};
