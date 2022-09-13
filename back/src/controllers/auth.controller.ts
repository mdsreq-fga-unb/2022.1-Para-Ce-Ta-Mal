import { Request, Response } from "express";

import authService from "../services/auth.service.js";
import { conflictError } from "../utils/error-utils.js";

async function signIn(req: Request, res: Response) {
  const body = req.body as { email: string; password: string };

  const userResponse = await authService.signIn(body.email, body.password);

  res.send({ token: userResponse });
}

async function signUp(req: Request, res: Response) {
  const body = req.body as { name: string; email: string; password: string };

  try {
    const userResponse = await authService.signUp(
      body.name,
      body.email,
      body.password
    );

    res.send(userResponse).status(201);
  } catch (error) {
    throw conflictError("Email já cadastrado, tente fazer login.");
  }
}

export default {
  signIn,
  signUp,
};
