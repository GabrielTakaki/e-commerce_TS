import config from 'config';
import jwt from 'jsonwebtoken';

const privateKey = config.get('privateKey') as string;

export const sign = (object: Object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(object, privateKey, options);
}
