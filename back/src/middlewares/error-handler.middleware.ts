import { NextFunction, Request, Response } from "express";
import {
  AppError,
  errorTypeToStatusCode,
  isAppError,
} from "../utils/error-utils.js";

export function errorHandler(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);

  if (isAppError(err)) {
    return res.status(errorTypeToStatusCode(err.type)).send(err.message);
  }

  return res.sendStatus(500);
}
