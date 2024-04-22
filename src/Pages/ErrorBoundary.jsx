import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Heading, Text } from '@chakra-ui/react'; // Import Chakra UI components

function ErrorBoundary() {
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      direction="column"
      color="black"
    >
      <Heading as="h1" size="xl" mb={4}>
        Ooops!
      </Heading>
      <Text fontSize="lg" textAlign="center" mb={4}>
        Something went wrong
      </Text>
      <Text fontSize="lg" textAlign="center">
        Go to <Link to="/" fontWeight="bold">Home Page</Link>
      </Text>
    </Flex>
  );
}

export default ErrorBoundary;
