import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://electropharm.herokuapp.com";

function createBearerToken(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function createDrug(body, token) {
  const headerAuth = createBearerToken(token);

  return axios.post(`${BASE_URL}/drugs`, body, headerAuth);
}

function deleteDrug(id, token) {
  const headerAuth = createBearerToken(token);

  return axios.delete(`${BASE_URL}/drugs/${id}`, headerAuth);
}

function updateDrug(id, body, token) {
  const headerAuth = createBearerToken(token);

  return axios.put(`${BASE_URL}/drugs/${id}`, body, headerAuth);
}

function getOneDrug(id, token) {
  const headerAuth = createBearerToken(token);

  return axios.get(`${BASE_URL}/drugs/${id}`, headerAuth);
}

function getAllDrugs(token) {
  const headerAuth = createBearerToken(token);

  return axios.get(`${BASE_URL}/drugs`, headerAuth);
}

function SignUp(body) {
  return axios.post(`${BASE_URL}/auth/sign-up`, body);
}

function SignIn(body) {
  return axios.post(`${BASE_URL}/auth/sign-in`, body);
}

function checkToken(token) {
  const headerAuth = createBearerToken(token);

  return axios.get(`${BASE_URL}/auth/check-token`, headerAuth);
}

export default {
  createDrug,
  deleteDrug,
  updateDrug,
  getOneDrug,
  getAllDrugs,
  SignUp,
  SignIn,
  checkToken,
};
