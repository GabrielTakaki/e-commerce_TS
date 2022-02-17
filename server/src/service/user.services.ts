import { DocumentDefinition, FilterQuery } from 'mongoose';
import { omit } from 'lodash';
import User, { IUser } from '../model/user.model';

export const create = async (user: DocumentDefinition<IUser>) => {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const find = async (query: FilterQuery<IUser>) => {
  try {
    return User.findOne(query).lean();
  } catch (e: any) {
    throw new Error(e);
  }
};

export const validatePassword = async ({
    email,
    password,
  }: {
    email: IUser['email'];
    password: string;
  }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
      throw new Error('Invalid password');
    }

    return omit(user.toJSON(), 'password');
}
