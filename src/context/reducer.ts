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
    case ActionTypes.DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    }
    case ActionTypes.ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    default:
      return state;
  }
};
