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

type RegisterProps = {
  register: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
};

export default function Register(registerProps: RegisterProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    registerProps.register({
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
          <Heading>Register</Heading>
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
            Register
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
