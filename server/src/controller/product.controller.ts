import log from "../logger";
import Product from "../model/product.model";
import { Request, Response } from "express";
import { list } from '../service/product.services';

interface MulterRequest extends Request {
  file: any;
};

export const createProductHandler = async (req: Request, res: Response): Promise<Response>  => {
  try {
    const documentFile = (req as MulterRequest).file;
    const { name, price, quantity, description } = req.body;
    const newPhoto = { name, price, quantity, description, image: documentFile.path };
    const photo = new Product(newPhoto);
    await photo.save();
    return res.status(201).send({ photo });
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

export const updateProductHandler = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { name, price, quantity, description } = req.body;
    const photo = await Product.findByIdAndUpdate(id,
      { name, price, quantity, description },
      { new: true }).lean();

    return res.status(200).send({ photo });
  } catch (e: any) {
    log.error(e);
    return res.status(404).send(e.message);
  }
};
