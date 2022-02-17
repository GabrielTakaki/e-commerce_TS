import { Express, Request, Response } from "express";
import { createHandler } from "./controller/user.controller";
import validate from './middleware/validate';

export default function (app: Express) {
  app.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/users', validate(), createHandler)
}
