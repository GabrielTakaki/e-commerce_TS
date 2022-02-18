import { get } from "lodash"
import { Request, Response, NextFunction } from "express"

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = get(req, "user");

  console.log(user);

  if (user.role !== 'admin') {
    return res.sendStatus(403);
  }

  return next();
};

export default checkAdmin;
