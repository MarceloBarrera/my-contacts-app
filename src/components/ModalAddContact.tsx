import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { ContactToAdd } from "../context/types";
import { isValidFormatEmail } from "../utils";

export const ModalAddContact = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (contactToAdd: ContactToAdd) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");

  const isValidToAdd =
    name !== "" && (email === "" || isValidFormatEmail(email));

  const isInvalidEmail = email !== "" && !isValidFormatEmail(email);

  const reset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setBirthday("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={reset}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired={true}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormControl>

          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            isInvalid={isInvalidEmail}
            errorBorderColor="red.300"
            id="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <FormLabel htmlFor="telephone">Phone</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Phone number"
              id="telephone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </InputGroup>

          <FormLabel htmlFor="birthday">Birthday</FormLabel>
          <Input
            id="birthday"
            type="date"
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            disabled={!isValidToAdd}
            data-test="add-contact-modal"
            colorScheme="teal"
            mr={3}
            onClick={() => {
              onConfirm({
                name,
                avatar: "https://i.pravatar.cc/300",
                email,
                phone,
                birthday,
              });
            }}
          >
            Add
          </Button>
          <Button variant="outline" onClick={reset}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
