import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { Contact } from "../context/types";
import { Card } from "./Card";

export const CardList = ({ contacts }: { contacts: Contact[] }) => {
  const [showItemId, setShowItemId] = useState<number>(-1);
  return (
    <SimpleGrid columns={{ sm: 2, md: 4 }} spacing="20px">
      {contacts.map((contact) => {
        return (
          <Card
            key={contact.id}
            contact={contact}
            showItemId={showItemId}
            setShowItemIdHandler={setShowItemId}
          />
        );
      })}
    </SimpleGrid>
  );
};
