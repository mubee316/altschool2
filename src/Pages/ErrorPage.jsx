import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Heading, Text, Box } from '@chakra-ui/react'; // Import Chakra UI components

function ErrorPage() {
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
                Page not found!
            </Text>
            <Box bg="red.500" color="black" rounded="md" p={2} mb={4}>
                Error
            </Box>
            <Text fontSize="lg" textAlign="center" mb={4}>
                Go to <Link to="/" fontWeight="bold">Home Page</Link>
            </Text>
        </Flex>
    );
}

export default ErrorPage;


