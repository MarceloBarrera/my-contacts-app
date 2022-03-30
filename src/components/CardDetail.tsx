import { Box, Button, ButtonGroup, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Contact } from "../context/types";
import { EditableField } from "./EditableField";
import { ModalConfirmation } from "./ModalConfirmation";
import useUpdateContact from "../context/useUpdateContact";

export const CardDetail = ({
  contact,
  setShowItemIdHandler,
}: {
  contact: Contact;
  setShowItemIdHandler: (id: number) => void;
}) => {
  const { updateContactField, deleteContact } = useUpdateContact();

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Box>
      <EditableField
        value={contact.email}
        updateHandler={(value) => updateContactField(contact, "email", value)}
        id={`contact-email-id-${contact.id}`}
      />
      <EditableField
        value={contact.phone}
        updateHandler={(value) => updateContactField(contact, "phone", value)}
        id={`contact-phone-id-${contact.id}`}
      />
      <EditableField
        value={contact.birthday}
        updateHandler={(value) =>
          updateContactField(contact, "birthday", value)
        }
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
            deleteContact(contact.id);
            setShowModal(false);
          }}
        />
      </VStack>
    </Box>
  );
};
