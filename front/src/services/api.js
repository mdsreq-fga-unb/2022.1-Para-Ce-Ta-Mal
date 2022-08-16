import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://electropharm.herokuapp.com";

function createDrug(body) {
  const promise = axios.post(`${BASE_URL}/drugs`, body);

  return promise;
}

function getAllDrugs(body) {
  const promise = axios.get(`${BASE_URL}/drugs`);

  return promise;
}

export default { createDrug, getAllDrugs };
