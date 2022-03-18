import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import ContextProvider from "./context/Context";
import { Contacts } from "./components/Contacts";

export const App = () => {
  return (
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <Contacts />
      </ChakraProvider>
    </ContextProvider>
  );
};
