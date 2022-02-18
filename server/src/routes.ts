import { Express, Request, Response } from "express";
import { createHandler } from "./controller/user.controller";
import { createSessionHandler, invalidateUserHandler } from "./controller/session.controller";
import { createProductHandler, listProductHandler, updateProductHandler } from "./controller/product.controller";
import validate from './middleware/validate';
import checkAdmin from "./middleware/checkAdmin";''
import requiresUser from './middleware/requireUser';
import { userSchema, loginSchema, productSchema } from "./schema/user.schema";
import multer from "./middleware/multer";

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
    checkAdmin,
    validate(productSchema),
    multer.single('image'),
    createProductHandler
  );

  app.get('/products', listProductHandler);

  app.put('/products/:id', requiresUser, checkAdmin, updateProductHandler);
};
