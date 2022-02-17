import config from 'config';
import jwt from 'jsonwebtoken';

const privateKey = config.get('privateKey') as string;

export const sign = (object: Object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(object, privateKey, options);
};

export const decode = (token: string) => {
  try {
    const decoded = jwt.verify(token, privateKey);

    return { valid: true, expired: false, decoded };
  } catch (err: any) {
    console.log({ err });
    return {
      valid: false,
      expired: err.message === 'jwt expired',
      decoded: null,
    };
  }
}
