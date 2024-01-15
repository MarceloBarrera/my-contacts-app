import { Box, Flex, Link } from "@chakra-ui/react";
import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

type UnauthenticatedAppProps = {
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
  register: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
};

export default function UnauthenticatedApp(
  unauthenticatedProps: UnauthenticatedAppProps
) {
  const { login, register } = unauthenticatedProps;
  const [showRegister, setShowRegister] = useState<boolean>(false);
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box my={4} textAlign="left">
        <Link
          variant="secondary"
          width="full"
          mt={4}
          onClick={() => {
            setShowRegister(false);
          }}
        >
          Login
        </Link>
        {" | "}
        <Link
          width="full"
          mt={4}
          onClick={() => {
            setShowRegister(true);
          }}
        >
          Register
        </Link>
      </Box>
      {showRegister ? (
        <Register register={register} />
      ) : (
        <Login login={login} />
      )}
    </Flex>
  );
}
