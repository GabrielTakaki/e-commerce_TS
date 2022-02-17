import { Express, Request, Response } from "express";
import { createHandler, createLogin } from "./controller/user.controller";
import validate from './middleware/validate';
import { userSchema, loginSchema } from "./schema/user.schema";

export default function (app: Express) {
  app.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  // Register a new user
  app.post('/users', validate(userSchema), createHandler);

  // Login a user
  app.post('/login', validate(loginSchema), createLogin);
}
