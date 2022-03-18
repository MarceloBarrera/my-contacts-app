import { Box, Button, ButtonGroup, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { ContactsContext } from "../context/Context";
import { ActionTypes, Contact } from "../context/types";
import { EditableField } from "./EditableField";

export const CardDetail = ({
  contact,
  setShowItemIdHandler,
}: {
  contact: Contact;
  setShowItemIdHandler: (id: number) => void;
}) => {
  const { dispatch } = useContext(ContactsContext);

  const updateContactPhone = (phone: string) => {
    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
      payload: { ...contact, phone },
    });
  };
  const updateContactEmail = (email: string) => {
    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
      payload: { ...contact, email },
    });
  };
  const updateContactBirthday = (birthday: string) => {
    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
      payload: { ...contact, birthday: new Date(birthday) },
    });
  };
  return (
    <Box>
      <EditableField value={contact.email} updateHandler={updateContactEmail} />
      <EditableField value={contact.phone} updateHandler={updateContactPhone} />
      <EditableField
        value={contact.birthday.toISOString().slice(0, 10)}
        updateHandler={updateContactBirthday}
      />

      <VStack direction={["column", "row"]}>
        <ButtonGroup variant="outline" spacing="6" mt="4">
          <Button
            colorScheme="red"
            onClick={() => {
              console.log("delete");
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
      </VStack>
    </Box>
  );
};
