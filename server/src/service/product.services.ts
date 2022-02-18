import { DocumentDefinition } from 'mongoose';
import Product, { IProduct } from '../model/product.model';

export const create = async (product: DocumentDefinition<IProduct>) => {
  try {
    const newProduct = await Product.create(product);
  
    return newProduct;
  } catch (e: any) {
    throw new Error(e);
  }
};

export const list = async () => {
  try {
    return await Product.find({}).lean();
  } catch (e: any) {
    throw new Error(e);
  }
};
