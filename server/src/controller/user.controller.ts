import { omit } from 'lodash';
import { Request, Response } from "express"
import { create } from "../service/user.services"

export const createHandler = async (req: Request, res: Response) => {
  try {
    const createdUser = await create(req.body);
    res.status(201).send(omit(createdUser.toJSON(), ["password"]));
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};
