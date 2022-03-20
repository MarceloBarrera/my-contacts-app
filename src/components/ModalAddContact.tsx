import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { ContactToAdd } from "../context/types";

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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              id="telephone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <FormLabel htmlFor="birthday">Birthday</FormLabel>
            <Input
              id="birthday"
              type="date"
              onChange={(e) => {
                setBirthday(e.target.value);
              }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
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
            Yes
          </Button>
          <Button variant="outline" onClick={onClose}>
            No
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
