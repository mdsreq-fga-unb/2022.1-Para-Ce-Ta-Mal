import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://electropharm.herokuapp.com";

function createDrug(body) {
  const promise = axios.post(`${BASE_URL}/drugs`, body);

  return promise;
}

function getAllDrugs() {
  const promise = axios.get(`${BASE_URL}/drugs`);

  return promise;
}

function SignUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);

  return promise;
}

function SignIn(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-in`, body);

  return promise;
}

export default { createDrug, getAllDrugs, SignUp, SignIn };
