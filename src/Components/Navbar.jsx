import { FaGithub } from "react-icons/fa";
import { Container, Heading, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Container as="section" maxWidth="4xl" bg="purple" color="white" borderRadius="10px" >
      <Heading p="10px" display="flex" alignItems="center" justifyContent="center">
        <FaGithub />
        <Text ml="10px">Faateeha's Github</Text>
      </Heading>
    </Container>
  );
}

export default Navbar;
