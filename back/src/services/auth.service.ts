import * as firebaseAuth from "firebase/auth";
import { auth } from "../config/firebase.js";
import authRepository from "../repositories/auth.repository.js";
import { conflictError, unauthorizedError } from "../utils/error-utils.js";

async function signIn(email: string, password: string) {
  try {
    var userResponse = await firebaseAuth.signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    throw unauthorizedError("E-mail ou senha errados!");
  }

  if (!userResponse) throw conflictError("E-mail não cadastrado!");

  if (!userResponse.user.emailVerified) {
    await firebaseAuth.sendEmailVerification(userResponse.user);

    throw conflictError(
      "Email não verificado, abre seu e-mail e confirme. Também confira o spam!"
    );
  }

  const token = await userResponse.user.getIdToken();

  return {
    token,
    name: userResponse.user.displayName,
    image: userResponse.user.photoURL,
  };
}

async function signUp(name: string, email: string, password: string) {
  try {
    var userResponse = await firebaseAuth.createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    throw conflictError("Email já cadastrado, tente fazer login.");
  }

  firebaseAuth.updateProfile(userResponse.user, {
    displayName: name,
  });

  await firebaseAuth.sendEmailVerification(userResponse.user);

  await authRepository.createUser({
    id: userResponse.user.uid,
    role: "ADMIN",
  });

  return "Email não verificado, abre seu e-mail e confirme. Também confira o spam!";
}

export default {
  signIn,
  signUp,
};
