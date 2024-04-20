import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { SearchResultList } from "./SearchResultList";

export const SearchResults = ({ results }) => {
  return (
    <Box
      color="white"
      bg="purple"
      overflowY="auto"
      maxHeight="300px"
      maxWidth="400px"
      px="10px"
    >
      {results.map((result, id) => {
        return <SearchResultList result={result} key={id}/>;
      })}
    </Box>
  );
};
