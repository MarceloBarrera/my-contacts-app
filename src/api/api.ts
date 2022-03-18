import axios, { AxiosError } from "axios";
import { ContactApi } from "../context/types";

const baseUrl = `https://61c32f169cfb8f0017a3e9f4.mockapi.io`;
export const getContacts = async (): Promise<ContactApi[]> => {
  return axios(`${baseUrl}/api/v1/contacts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.log("api error", error);
      return Promise.reject(`unexpected error`);
    });
};
