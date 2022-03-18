import { ActionTypes, State, Action, ContactApi } from "./types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_CONTACTS: {
      return {
        ...state,
        contacts: action.payload.map((contact: ContactApi) => {
          return {
            ...contact,
            createdAt: new Date(contact.createdAt),
            birthday: new Date(contact.birthday),
            id: parseInt(contact.id),
          };
        }),
      };
    }
    case ActionTypes.UPDATE_CONTACT: {
      const indexContact = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      );
      return {
        ...state,
        contacts: [
          ...state.contacts.slice(0, indexContact),
          action.payload,
          ...state.contacts.slice(indexContact + 1),
        ],
      };
    }
    default:
      return state;
  }
};
