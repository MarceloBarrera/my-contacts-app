import { Button, ChakraProvider, Link, theme } from "@chakra-ui/react";
import * as auth from "./utils/auth-provider";

import ContextProvider from "./context/Context";
import { Contacts } from "./components/Contacts";
import { useState } from "react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import UnauthenticatedApp from "./components/UnauthenticatedApp/UnauthenticatedApp";

type user = {
  username: string;
  id: string;
  token: string;
};
export const App = () => {
  const [user, setUser] = useState<user | undefined>(undefined);
  const login = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => auth.login({ username, password }).then((u) => setUser(u));

  const register = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => auth.register({ username, password }).then((u) => setUser(u));

  const logout = () => {
    auth.logout();
    setUser(undefined);
  };

  return (
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <>
          <ColorModeSwitcher />
          {user?.username}
          {user ? (
            <>
              <Link
                as={Button}
                variant="secondary"
                css={{ marginLeft: "10px" }}
                onClick={logout}
              >
                Logout
              </Link>
              <Contacts />
            </>
          ) : (
            <UnauthenticatedApp login={login} register={register} />
          )}
        </>
      </ChakraProvider>
    </ContextProvider>
  );
};
