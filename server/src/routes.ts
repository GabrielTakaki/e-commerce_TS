import { Express, Request, Response } from "express";
import { createHandler } from "./controller/user.controller";
import { createSessionHandler, invalidateUserHandler } from "./controller/session.controller";
import { createProductHandler, listProductHandler } from "./controller/product.controller";
import validate from './middleware/validate';
import checkAdmin from "./middleware/checkAdmin";''
import requiresUser from './middleware/requireUser';
import { userSchema, loginSchema, productSchema } from "./schema/user.schema";

export default function (app: Express) {
  app.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  // Register a new user
  app.post('/users', validate(userSchema), createHandler);

  // Login a user
  app.post('/login', validate(loginSchema), createSessionHandler);

  // Logout
  app.delete('/logout', requiresUser, invalidateUserHandler);

  // Products
  app.post(
    '/products',
    requiresUser,
    validate(productSchema),
    createProductHandler
  );
  app.get('/products', listProductHandler);
};
