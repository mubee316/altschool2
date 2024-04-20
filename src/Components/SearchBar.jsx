import React, { useState } from 'react';
import { InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    const fetchData = (value) => {
        fetch("https://api.github.com/users/faateeha/repos")
        .then((response) => response.json())
        .then ((json) => {
            const results = json.filter((repo) => {
                return repo.name.toLowerCase().includes(value.toLowerCase());
            })
            setResults(results)
        })
    }

    const handleChange = (value) => {
      setInput(value);
      if (value === "") {
        setResults([]);
    } else {
        fetchData(value);
    }

    };

    return (
      
        <InputGroup my="25px">
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaSearch} color="gray.300" />}
          />
          <Input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            width="500px"
          />
        </InputGroup>
      
    );
  };

  export default SearchBar;



