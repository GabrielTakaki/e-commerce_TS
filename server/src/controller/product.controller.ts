import log from "../logger";
import { Request, Response } from "express";
import { create, list } from '../service/product.services';

export const createProductHandler = async (req: Request, res: Response) => {
  try {
    const createdProduct = await create(req.body);
    return res.status(201).send({ createdProduct });
  } catch (e: any) {
    log.error(e);
    return res.status(402).send(e.message);
  }
};

export const listProductHandler = async (_req: Request, res: Response) => {
  try {
    return res.status(200).send(await list());
  } catch (e: any) {
    log.error(e);
    return res.status(404).send(e.message);
  }
};
