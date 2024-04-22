import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Box, Button, Text, Wrap, WrapItem, Center, InputGroup, InputLeftElement, Input, Icon  } from "@chakra-ui/react";


function Home() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  

  const fetchRepos = (page) => {
    fetch(
      `https://api.github.com/users/faateeha/repos?page=${page}&per_page=5`
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchRepos(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetch("https://api.github.com/users/faateeha/repos")
      .then((response) => response.json())
      .then((data) => {
        const totalPages = Math.ceil(data.length / 5);
        setTotalPages(totalPages);
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
      });
  }, []);

  return (
    <>
      <InputGroup my="25px" w="500px">
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FaSearch} color="purple" />}
        />
        <Input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search repository"
          color="white"
          
          _placeholder={{ color: "purple" }}
        />
      </InputGroup>
      
      <Wrap spacing={4} justify="center" my="30px">
        {user.filter((userElement) => {
          return search.toLowerCase() === "" ? userElement : userElement.name.toLowerCase().includes(search);
        }).map((userElement) => (
          <WrapItem key={userElement.id}>
            <Box p={3} borderWidth="1px" borderRadius="md">
              <Link to={`/repodetails/${userElement.name}`}>
                <Text fontSize="xl" fontWeight="semibold" mb={2} color="purple">
                  {userElement.name}
                </Text>
              </Link>
              <Text mb={2} color="white">
                Language: {userElement.language}
              </Text>
              <Text mb={2} color="white">
                Last Updated: {userElement.updated_at}
              </Text>
              <Text mb={2} color="white">
                Description: {userElement.description}
              </Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Center>
        {[...Array(totalPages).keys()].map((page) => (
          <Button
            key={page}
            colorScheme="purple"
            color="white"
            mx="5px"
            onClick={() => handlePageChange(page + 1)}
            disabled={currentPage === page + 1}
          >
            {page + 1}
          </Button>
        ))}
      </Center>
      
    </>
  );
}

export default Home;

