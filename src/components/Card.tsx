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
import { Contact } from "../context/types";
import useUpdateContact from "../context/useUpdateContact";
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
  const { updateContactField } = useUpdateContact();

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
          <Box bgColor="lightgray" h={"120px"} w={"full"} />
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
                    updateContactField(
                      contact,
                      "avatar",
                      generateRandomAvatar()
                    );
                  }}
                  aria-label={`edit-avatar-${contact.id}`}
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
                    updateHandler={(name: string) => {
                      updateContactField(contact, "name", name);
                    }}
                    id={`contact-name-id-${contact.id}`}
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
