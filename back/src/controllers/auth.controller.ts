import { Request, Response } from "express";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from "firebase/auth";
import { auth } from "../config/firebase.js";
import authService from "../services/auth.service.js";
import { conflictError } from "../utils/error-utils.js";

async function signIn(req: Request, res: Response) {
  const body = req.body as { email: string; password: string };

  const userResponse = await authService.signIn(body.email, body.password);

  res.send(userResponse);
}

async function signUp(req: Request, res: Response) {
  const body = req.body as { email: string; password: string };

  try {
    const userResponse = await authService.signUp(body.email, body.password);

    res.send(userResponse);
  } catch (error) {
    throw conflictError("Email já cadastrado, tente fazer login.");
  }
}

export default {
  signIn,
  signUp,
};
