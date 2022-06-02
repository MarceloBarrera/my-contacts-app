import { useContext } from "react";
import { deleteContact as deleteContactApi, updateContact } from "../api/api";
import { ContactsContext } from "./Context";
import { ActionTypes, Contact } from "./types";

type updateContactDispatches = {
  updateContactField: (
    contact: Contact,
    field: string,
    value: string
  ) => Promise<void>;

  deleteContact: (id: number) => Promise<void>;
};

const useUpdateContact = (): updateContactDispatches => {
  const { dispatch } = useContext(ContactsContext);

  const updateContactField = async (
    contact: Contact,
    field: string,
    value: string
  ): Promise<void> => {
    const updatedContact: any = { ...contact };
    updatedContact[field] = value;

    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
      payload: updatedContact,
    });
    await updateContact(updatedContact);
  };

  const deleteContact = async (id: number) => {
    dispatch({
      type: ActionTypes.DELETE_CONTACT,
      payload: id,
    });
    await deleteContactApi(id);
  };

  return { updateContactField, deleteContact };
};

export default useUpdateContact;
