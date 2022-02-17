import { LeanDocument } from 'mongoose';
import { IUser } from "../model/user.model";
import { sign } from '../utils/jwt'
import config from 'config'
import Session, { ISession } from "../model/session.model";

export const create = async (userId: string, userAgent: string) => {
  const session = await Session.create({ user: userId, userAgent });

  return session.toJSON();
};

export const createAccessToken = ({
  user,
  session,
}: {
  // Will expect a user with the password omited
  user:
    | Omit<IUser, 'password' | string>
    | LeanDocument<Omit<IUser, 'password'>>;
  session:
    | Omit<ISession, 'password'>
    | LeanDocument<Omit<ISession, 'password'>>;
}) => {
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.get('accessTokenExpiration') }
  );

  return accessToken;
}
