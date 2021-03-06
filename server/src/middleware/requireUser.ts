import { get } from "lodash"
import { Request, Response, NextFunction } from "express"

const requiresUser = (req: Request, res: Response, next: NextFunction) => {
  const user = get(req, "user");

  if (!user) {
    return res.sendStatus(403);
  }

  console.log(user);

  return next();
};

export default requiresUser;
