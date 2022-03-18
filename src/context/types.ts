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
  birthday: Date;
  id: number;
};

export type State = {
  contacts: Contact[];
};

export enum ActionTypes {
  SET_CONTACTS = "SET_CONTACTS",
  UPDATE_CONTACT = "UPDATE_CONTACT",
}

export type Action =
  | { type: ActionTypes.SET_CONTACTS; payload: ContactApi[] }
  | { type: ActionTypes.UPDATE_CONTACT; payload: Contact };

export type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export enum Status {
  LOADING = "LOADING",
  RESOLVED = "RESOLVED",
  REJECTED = "REJECTED",
}
