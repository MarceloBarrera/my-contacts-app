import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ContactsContext } from "../context/Context";
import { ActionTypes, ContactToAdd, Status } from "../context/types";
import { CardList } from "./CardList";
import { addContact, getContacts } from "../api/api";
import { AddIcon } from "@chakra-ui/icons";
import { ModalAddContact } from "./ModalAddContact";

export const Contacts = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
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

  const addContactHandler = async (contactToAdd: ContactToAdd) => {
    const contactAdded = await addContact(contactToAdd);
    dispatch({ type: ActionTypes.ADD_CONTACT, payload: contactAdded });
    setShowModal(false);
  };

  return (
    <Container maxW="80%">
      <Flex alignItems="center" justifyContent="center">
        <Heading> My contacts list </Heading>
      </Flex>

      <Button
        onClick={() => setShowModal(true)}
        variant={"solid"}
        colorScheme={"teal"}
        size={"sm"}
        mr={4}
        leftIcon={<AddIcon />}
      >
        Add Contact
      </Button>
      <ModalAddContact
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onConfirm={(contact) => {
          addContactHandler(contact);
        }}
      />

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
