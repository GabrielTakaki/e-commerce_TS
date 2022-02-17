import { AnySchema } from 'yup';
import { Request, Response, NextFunction } from 'express';
import log from '../logger';

const validate = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    return next();
<<<<<<< HEAD
  } catch (e: any) {
=======
  } catch (e) {
>>>>>>> 92ee5cbeddfe8cad3b8788f9b78e2a09fe37370f
    log.error(e);
    return res.status(400).send(e.errors);
  }
};

export default validate;
