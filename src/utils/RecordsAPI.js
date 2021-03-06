import axios from "axios";
const api =
  process.env.REACT_APP_RECORDS_API_URL ||
  "https://5bd5b2e79325280013d28897.mockapi.io";

export const getAll = () => axios.get(`${api}/api/v1/records`);

export const create = body => axios.post(`${api}/api/v1/records`, body);
