import { Box, Button, ButtonGroup, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { updateContact, deleteContact } from "../api/api";
import { ContactsContext } from "../context/Context";
import { ActionTypes, Contact } from "../context/types";
import { EditableField } from "./EditableField";
import { ModalConfirmation } from "./ModalConfirmation";

export const CardDetail = ({
  contact,
  setShowItemIdHandler,
}: {
  contact: Contact;
  setShowItemIdHandler: (id: number) => void;
}) => {
  const { dispatch } = useContext(ContactsContext);
  const [showModal, setShowModal] = useState<boolean>(false);

  const updateContactPhone = async (phone: string) => {
    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
      payload: { ...contact, phone },
    });
    await updateContact({ ...contact, phone });
  };

  const updateContactEmail = async (email: string) => {
    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
      payload: { ...contact, email },
    });
    await updateContact({ ...contact, email });
  };

  const updateContactBirthday = async (birthday: string) => {
    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
      payload: { ...contact, birthday },
    });
    await updateContact({ ...contact, birthday });
  };

  const deleteContactHandler = async (id: number) => {
    dispatch({
      type: ActionTypes.DELETE_CONTACT,
      payload: id,
    });
    await deleteContact(id);
  };
  return (
    <Box>
      <EditableField
        value={contact.email}
        updateHandler={updateContactEmail}
        id={`contact-email-id-${contact.id}`}
      />
      <EditableField
        value={contact.phone}
        updateHandler={updateContactPhone}
        id={`contact-phone-id-${contact.id}`}
      />
      <EditableField
        value={contact.birthday}
        updateHandler={updateContactBirthday}
        id={`contact-birthday-id-${contact.id}`}
      />

      <VStack direction={["column", "row"]}>
        <ButtonGroup variant="outline" spacing="6" mt="4">
          <Button
            data-test={`delete-btn-contact-${contact.id}`}
            colorScheme="red"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              setShowItemIdHandler(-1);
            }}
          >
            Close
          </Button>
        </ButtonGroup>
        <ModalConfirmation
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          onConfirm={() => {
            deleteContactHandler(contact.id);
            setShowModal(false);
          }}
        />
      </VStack>
    </Box>
  );
};
