import firebase from "firebase-admin";
import serviceAccountKey from "../../serviceAccountKey.js";

firebase.initializeApp({
  credential: firebase.credential.cert(
    JSON.parse(JSON.stringify(serviceAccountKey))
  ),
});

export default firebase;
