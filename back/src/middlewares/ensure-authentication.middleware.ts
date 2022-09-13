import { NextFunction, Request, Response } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier.js";
import { prisma } from "../config/database.js";
import { firebaseAdmin } from "../config/firebase.js";
import { notFoundError, unauthorizedError } from "../utils/error-utils.js";

export async function ensureAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) {
    throw unauthorizedError("Missing authorization header");
  }

  const token = authorization.replace("Bearer ", "");
  if (!token) throw unauthorizedError("Missing token");

  try {
    var { uid, name, email } = await firebaseAdmin.auth().verifyIdToken(token);
  } catch {
    throw unauthorizedError("Token Expirado");
  }

  const dbUser = await prisma.user.findFirst({
    where: { id: uid },
  });

  if (!dbUser) throw unauthorizedError("Token Expirado");

  res.locals.user = {
    ...dbUser,
    name,
    email,
  };

  next();
}
