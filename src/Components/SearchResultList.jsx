import React from 'react'
import { Box, Text } from '@chakra-ui/react';

export const SearchResultList = ({ result }) => {
  return (
    <Box
      p="4"
      borderWidth="1px"
      borderRadius="md"
      _hover={{ bg: 'purple.500', color: 'white' }}
      cursor="pointer"
    >
      <Text>{result.name}</Text>
    </Box>
  );
};

