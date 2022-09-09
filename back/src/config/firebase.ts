import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../../firebaseConfig.js";

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
