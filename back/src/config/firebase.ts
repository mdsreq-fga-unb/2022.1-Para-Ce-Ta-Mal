import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../../firebaseConfig.js";

import firebaseAdmin from "firebase-admin";
import serviceAccountKey from "../../serviceAccountKey.js";

const app = initializeApp(firebaseConfig);

const auth = getAuth();

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    JSON.parse(JSON.stringify(serviceAccountKey))
  ),
});

export { app, auth, firebaseAdmin };
