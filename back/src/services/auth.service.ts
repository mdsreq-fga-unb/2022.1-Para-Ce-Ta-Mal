import * as firebaseAuth from "firebase/auth";
import { auth } from "../config/firebase.js";
import { conflictError } from "../utils/error-utils.js";

async function signIn(email: string, password: string) {
  const userResponse = await firebaseAuth.signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (!userResponse.user.emailVerified)
    throw conflictError("Email não verificado, abre seu e-mail e confirme");

return userResponse;
}

async function signUp(email: string, password: string) {
  try {
    const userResponse = await firebaseAuth.createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await firebaseAuth.sendEmailVerification(userResponse.user);

    return userResponse;
  } catch (error) {
    throw conflictError("Email já cadastrado, tente fazer login.");
  }
}

export default {
  signIn,
  signUp,
};
