import axios, { AxiosError } from "axios";
import { Contact, ContactApi, ContactToAdd } from "../context/types";

const baseUrl = process.env.REACT_APP_CONTACTS_API;
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

export const updateContact = async (contact: Contact): Promise<Contact> => {
  return axios(`${baseUrl}/api/v1/contacts/${contact.id}`, {
    method: "PUT",
    data: { ...contact },
  })
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.log("api error", error);
      return Promise.reject(`unexpected error`);
    });
};

export const addContact = async (
  contactToAdd: ContactToAdd
): Promise<Contact> => {
  return axios(`${baseUrl}/api/v1/contacts/`, {
    method: "POST",
    data: { ...contactToAdd },
  })
    .then((response) => {
      const contactNew: Contact = {
        ...response.data,
        createdAt: new Date(response.data.createdAt),
        id: parseInt(response.data.id),
      };
      return contactNew;
    })
    .catch((error: AxiosError) => {
      console.log("api error", error);
      return Promise.reject(`unexpected error`);
    });
};

export const deleteContact = async (id: number): Promise<Contact> => {
  return axios(`${baseUrl}/api/v1/contacts/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.log("api error", error);
      return Promise.reject(`unexpected error`);
    });
};
