export type ContactApi = {
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  birthday: string;
  id: string;
};

export type Contact = {
  createdAt: Date;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  birthday: string;
  id: number;
};

export type ContactToAdd = {
  name: string;
  avatar: string;
  email: string;
  phone: string;
  birthday: string;
};

export type State = {
  contacts: Contact[];
};

export enum ActionTypes {
  SET_CONTACTS = "SET_CONTACTS",
  UPDATE_CONTACT = "UPDATE_CONTACT",
  DELETE_CONTACT = "DELETE_CONTACT",
  ADD_CONTACT = "ADD_CONTACT",
}

export type Action =
  | { type: ActionTypes.SET_CONTACTS; payload: ContactApi[] }
  | { type: ActionTypes.UPDATE_CONTACT; payload: Contact }
  | { type: ActionTypes.DELETE_CONTACT; payload: number }
  | {
      type: ActionTypes.ADD_CONTACT;
      payload: Contact;
    };

export type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export enum Status {
  LOADING = "LOADING",
  RESOLVED = "RESOLVED",
  REJECTED = "REJECTED",
}
