import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://electropharm.herokuapp.com";

export function createDrug(body) {
  const promise = axios.post(`${BASE_URL}/drugs`, body);

  return promise;
}
