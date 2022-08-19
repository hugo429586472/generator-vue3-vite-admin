import AxiosCaps from "axios-caps";
import { httpConfig } from "../config";

export const axios = new AxiosCaps(httpConfig, {
  path: "./apis.yml",
  type: "yml",
});

export default {
  axios,
};
