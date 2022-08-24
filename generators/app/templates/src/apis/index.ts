import AxiosCaps from "axios-caps";
import { httpConfig } from "../config";
import { apiConfig } from "./apis";

export const axios = new AxiosCaps(httpConfig, {
  config: apiConfig,
  type: "object"
});

export default {
  axios,
};
