import { InitialState } from "../../context/Context";
import { reducer } from "../../context/reducer";
import { Action, ActionTypes, State } from "../../context/types";

const contactApi1 = {
  createdAt: "2021-12-22T07:11:08.136Z",
  name: "Olive Sawayn",
  avatar: "https://i.pravatar.cc/300",
  email: "Chadd_MacGyver0@hotmail.com",
  phone: "(264) 221-8092 x4383",
  birthday: "2021-01-14T01:43:04.943Z",
  id: "1",
};
const contactApi2 = {
  createdAt: "2021-12-21T16:57:41.550Z",
  name: "Melody Jacobi",
  avatar: "https://i.pravatar.cc/300",
  email: "Gretchen73@hotmail.com",
  phone: "1-811-658-9113",
  birthday: "2021-05-24T06:54:15.513Z",
  id: "2",
};
const contactsApi = [contactApi1, contactApi2];

const contact1 = {
  createdAt: new Date("2021-12-22T07:11:08.136Z"),
  name: "Olive Sawayn",
  avatar: "https://i.pravatar.cc/300",
  email: "Chadd_MacGyver0@hotmail.com",
  phone: "(264) 221-8092 x4383",
  birthday: new Date("2021-01-14T01:43:04.943Z"),
  id: 1,
};
const contact2 = {
  createdAt: new Date("2021-12-21T16:57:41.550Z"),
  name: "Melody Jacobi",
  avatar: "https://i.pravatar.cc/300",
  email: "Gretchen73@hotmail.com",
  phone: "1-811-658-9113",
  birthday: new Date("2021-05-24T06:54:15.513Z"),
  id: 2,
};
const initialState: State = {
  contacts: [contact1, contact2],
};

it("should set contacts list when set", () => {
  const action: Action = {
    type: ActionTypes.SET_CONTACTS,
    payload: contactsApi,
  };

  const newState = reducer(InitialState, action);

  expect(newState.contacts.length).toEqual(2);
  expect(newState.contacts).toEqual(initialState.contacts);
});

it("should update contact when updated", () => {
  const action: Action = {
    type: ActionTypes.UPDATE_CONTACT,
    payload: {
      ...contact2,
      name: "foo bar",
    },
  };

  const newState = reducer(initialState, action);

  expect(newState.contacts[1]).toEqual({
    ...contact2,
    name: "foo bar",
  });
  expect(newState.contacts.length).toEqual(2);
});
