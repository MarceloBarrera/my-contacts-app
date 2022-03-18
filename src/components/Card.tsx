import { EditIcon } from "@chakra-ui/icons";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Stack,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ContactsContext } from "../context/Context";
import { ActionTypes, Contact } from "../context/types";
import { generateRandomAvatar } from "../utils";
import { CardDetail } from "./CardDetail";
import { EditableField } from "./EditableField";

export const Card = ({
  contact,
  setShowItemIdHandler,
  showItemId,
}: {
  contact: Contact;
  setShowItemIdHandler: (id: number) => void;
  showItemId: number;
}) => {
  const { dispatch } = useContext(ContactsContext);
  const updateContactName = (name: string) => {
    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
      payload: { ...contact, name },
    });
  };

  const updateContactAvatar = (avatar: string) => {
    dispatch({
      type: ActionTypes.UPDATE_CONTACT,
      payload: { ...contact, avatar },
    });
  };

  const isEditMode = showItemId === contact.id;

  return (
    <Center py={6}>
      <Box
        maxW={"280px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box
          onClick={() => {
            setShowItemIdHandler(contact.id);
          }}
        >
          <Box bgColor="lightblue" h={"120px"} w={"full"} />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={contact.avatar}
              name={contact.name}
              css={{
                border: "2px solid white",
              }}
            />
            {isEditMode && (
              <>
                <IconButton
                  onClick={() => {
                    updateContactAvatar(generateRandomAvatar());
                  }}
                  aria-label="edit-avatar"
                  size="sm"
                  icon={<EditIcon />}
                />
              </>
            )}
          </Flex>

          <Box p={2} textAlign="center">
            <Stack spacing={0} align={"center"} mb={2}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                {isEditMode ? (
                  <EditableField
                    value={contact.name}
                    updateHandler={updateContactName}
                  />
                ) : (
                  contact.name
                )}
              </Heading>
            </Stack>
          </Box>
        </Box>
        {isEditMode && (
          <Box p={2} textAlign="center">
            <CardDetail
              contact={contact}
              setShowItemIdHandler={setShowItemIdHandler}
            />
          </Box>
        )}
      </Box>
    </Center>
  );
};
