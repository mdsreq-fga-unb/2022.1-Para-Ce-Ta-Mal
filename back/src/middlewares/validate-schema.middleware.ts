import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);

    console.log(req.body);

    if (validation.error) {
      return res.status(422).send({ error: validation.error.message });
    }

    res.sendStatus(200);
    // next();
  };
}
