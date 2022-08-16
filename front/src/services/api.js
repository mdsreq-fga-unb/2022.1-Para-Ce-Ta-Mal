import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://electropharm.herokuapp.com";

function createDrug(body) {
  const promise = axios.post(`${BASE_URL}/drugs`, body);

  return promise;
}

export default { createDrug };
