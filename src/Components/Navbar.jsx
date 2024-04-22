import { FaGithub } from "react-icons/fa";
import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Container as="section" maxWidth="4xl" bg="purple" color="white" borderRadius="10px" >
      <Heading p="10px" display="flex" alignItems="center" justifyContent="center">
        <FaGithub />
        <Text ml="10px">Faateeha's Github</Text>
      </Heading>
      <NavLink to="/"><Button>Repos</Button></NavLink>
      <NavLink to="/Error"><Button m="5px">404 Page</Button></NavLink>
      <NavLink to="/error-boundary"><Button m="5px">Error Boundary</Button></NavLink>
      
    </Container>
  );
}

export default Navbar;
