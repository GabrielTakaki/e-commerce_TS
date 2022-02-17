import { LeanDocument, FilterQuery, UpdateQuery } from 'mongoose';
import { IUser } from "../model/user.model";
import { decode, sign } from '../utils/jwt'
import config from 'config'
import Session, { ISession } from "../model/session.model";
import { get } from 'lodash';
import { find } from './user.services';

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
};

export const reIssueAccessToken = async ({
  refreshToken,
}: {
  refreshToken: string;
}) => {
  // Decode the refresh token
  const { decoded } = decode(refreshToken);

  if (!decoded || !get(decoded, '_id')) return false;

  // Get the session
  const session = await Session.findById(get(decoded, '_id'));

  // if session still valid
  if (!session || !session?.valid) return false;

  const user = await find({ _id: session.user });

  if (!user) return false;

  const accessToken = createAccessToken({ user, session });

  return accessToken;
};

export const updateSession = async (
  query: FilterQuery<ISession>,
  update: UpdateQuery<ISession>
) => {
  return Session.updateOne(query, update);
}

export const findSessions = async (query: FilterQuery<ISession>) => {
  return Session.find(query).lean();
}
