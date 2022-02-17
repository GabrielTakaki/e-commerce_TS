import { omit } from 'lodash';
import { Request, Response } from "express"
import { create } from "../service/user.services"
import log from '../logger';

export const createHandler = async (req: Request, res: Response) => {
  try {
    const createdUser = await create(req.body);
    res.status(201).send(omit(createdUser.toJSON(), ["password"]));
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};
