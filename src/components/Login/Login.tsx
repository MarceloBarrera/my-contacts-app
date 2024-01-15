import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

type LoginProps = {
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
};

export default function Login(loginProps: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    loginProps.login({
      username: email,
      password: password,
    });
  };

  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
      </Box>
      <Box my={4} textAlign="left">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="test@test.com"
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="*******"
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            LogIn
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
