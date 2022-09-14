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

  firebaseAuth.updateProfile(userResponse.user, {
    photoURL:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/1/7/2/6/1726461f28caf13e781f94b68f8dd790.jpg",
  });

  return userResponse.user.getIdToken();
}

async function signUp(name: string, email: string, password: string) {
  try {
    const userResponse = await firebaseAuth.createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    firebaseAuth.updateProfile(userResponse.user, {
      displayName: name,
    });

    await firebaseAuth.sendEmailVerification(userResponse.user);

    await authRepository.createUser({
      id: userResponse.user.uid,
      role: "ADMIN",
    });

    return "Email não verificado, abre seu e-mail e confirme. Também confira o spam!";
  } catch (error) {
    throw conflictError("Email já cadastrado, tente fazer login.");
  }
}

export default {
  signIn,
  signUp,
};
