import type express from 'express';
import { query } from 'express';
import type * as z from 'zod';

function validateRequest(schema: z.AnyZodObject) {
  return function (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) {
    try {
      schema.parse({
        body: request.body,
        query: request.query,
        params: request.params,
      });
      next();
    } catch (error: any) {
      console.error(error);
      return response.status(403).send(error.errors);
    }
  };
}

export default validateRequest;
