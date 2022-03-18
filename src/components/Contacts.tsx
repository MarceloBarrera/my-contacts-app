import { Container, Flex, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ContactsContext } from "../context/Context";
import { ActionTypes, Status } from "../context/types";
import { CardList } from "./CardList";
import { getContacts } from "../api/api";

export const Contacts = () => {
  const [status, setStatus] = useState<Status>(Status.LOADING);

  const { state, dispatch } = useContext(ContactsContext);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const contacts = await getContacts();
        dispatch({ type: ActionTypes.SET_CONTACTS, payload: contacts });
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    };
    makeRequest();
  }, [dispatch]);

  return (
    <Container maxW="80%">
      <Flex alignItems="center" justifyContent="center">
        <Heading> My contacts list </Heading>
        <ColorModeSwitcher />
      </Flex>
      {status === Status.LOADING ? (
        "Loading..."
      ) : status === Status.REJECTED ? (
        "Something went wrong, try again later"
      ) : (
        <CardList contacts={state.contacts} />
      )}
    </Container>
  );
};
