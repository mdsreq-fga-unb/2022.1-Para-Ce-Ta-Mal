import { Request, Response } from "express";
import firebase from "../config/firebase.js";

async function signIn(req: Request, res: Response) {}

async function signUp(req: Request, res: Response) {
  const body = req.body as { email: string; password: string };

  const userResponse = await firebase.auth().createUser({
    email: body.email,
    password: body.password,
    emailVerified: false,
    disabled: false,
  });

  res.send(userResponse);
}

export default {
  signIn,
  signUp,
};
