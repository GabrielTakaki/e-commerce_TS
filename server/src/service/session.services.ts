import { LeanDocument } from 'mongoose';
import { IUser } from "../model/user.model";
import { sign } from '../utils/jwt'
import config from 'config'
import Session, { ISession } from "../model/session.model";

export const create = async (userId: string, userAgent: string) => {
  const session = await Session.create({ user: userId, userAgent });

  return session.toJSON();
};

export const accessToken = ({
  user,
  session,
}: {
  user:
    // Will expect a user with the password omited
    | Omit<IUser, 'password'>
    | LeanDocument<Omit<IUser, 'password'>>;
  session:
    | Omit<ISession, 'password'>
    | LeanDocument<Omit<ISession, 'password'>>;
}) => {
  const token = sign(
    { ...user, session: session._id },
    { expiresIn: config.get('accessTokenExpiration') }
  );

  return token;
}
