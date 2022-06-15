import randkey from "randkey";
import axios from "axios";
import { Buffer } from "buffer";
import Cookies from "js-cookie";

export const instance = axios.create();
export const login = axios.create();

instance.interceptors.request.use((config) => {
  config.baseURL = "https://api-factory.simbirsoft1.com/api/db/";
  config.headers = {
    "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
    Authorization: `Bearer ${Cookies.get("access_token")}`,
  };

  return config;
});

const authKey64 = Buffer.from(
  `${randkey.rand(8)}:${process.env.REACT_APP_SECRET_KEY as string}`,
  "utf-8"
).toString("base64");

login.interceptors.request.use((config) => {
  config.baseURL = "https://api-factory.simbirsoft1.com/api/auth/";
  config.headers = {
    Authorization: `Basic ${authKey64}`,
  };

  return config;
});
