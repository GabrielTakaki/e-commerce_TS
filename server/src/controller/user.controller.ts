import { omit } from 'lodash';
import { Request, Response } from "express"
import { create } from "../service/user.services"
<<<<<<< HEAD
import log from '../logger';
=======
>>>>>>> 92ee5cbeddfe8cad3b8788f9b78e2a09fe37370f

export const createHandler = async (req: Request, res: Response) => {
  try {
    const createdUser = await create(req.body);
    res.status(201).send(omit(createdUser.toJSON(), ["password"]));
<<<<<<< HEAD
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
};

export const createLogin = async (req: Request, res: Response) => {
  try {
    
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
=======
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};
>>>>>>> 92ee5cbeddfe8cad3b8788f9b78e2a09fe37370f
