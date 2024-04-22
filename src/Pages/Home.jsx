import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Box, Button, Text, Wrap, WrapItem, Center, InputGroup, InputLeftElement, Input, Icon  } from "@chakra-ui/react";


function Home() {
  const [userRepoData, setUserRepoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [isloading, setIsLoading]=useState(false)
  

  const fetchRepos = (page) => {
    setIsLoading(true)
    fetch(
      `https://api.github.com/users/mubee316/repos?page=${page}&per_page=5`
    )
      .then((response) => response.json())
      .then((data) => {
        setUserRepoData(data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching repositories:", error);
        setIsLoading(false)
      })
      
      
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchRepos(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetch("https://api.github.com/users/mubee316/repos")
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
    {isloading&&(
      <h1>Loading....</h1>
    )}
      <InputGroup my="25px" w="500px">
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FaSearch} color="green" />}
        />
        <Input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search repository"
          color="white"
          
          _placeholder={{ color: "green" }}
        />
      </InputGroup>
      
      <Wrap spacing={10} justify="center" my="30px">
        {userRepoData.filter((userElement) => {
          return search.toLowerCase() === "" ? userElement : userElement.name.toLowerCase().includes(search);
        }).map((userElement) => (
          <WrapItem key={userElement.id}>
            <Box p={3} borderWidth="1px" borderRadius="20px">
              <Link to={`/repodetails/${userElement.name}`}>
                <Text fontSize="xl" style={{textDecoration:"underline"}} fontWeight="semibold" mb={2} color="green">
                  {userElement.name.toUpperCase()}
                </Text>
              </Link>
              <Text mb={2} color="black">
                Language: {userElement.language}
              </Text>
              <Text mb={2} color="black">
                Last Updated: {userElement.updated_at}
              </Text>
              <Text mb={2} color="black">
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
            colorScheme="green"
            color="black"
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

