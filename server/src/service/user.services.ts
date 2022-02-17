import { DocumentDefinition } from 'mongoose';
import User, { IUser } from '../model/user.model';

export const create = async (user: DocumentDefinition<IUser>) => {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (e) {
    throw new Error(e);
  }
};

export const find = async (query: any) => {
  try {

  } catch (e) {
    throw new Error(e);
  }
};
