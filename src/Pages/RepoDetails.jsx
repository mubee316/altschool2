import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Text, Link as ChakraLink, Button } from '@chakra-ui/react';
import { FaRegStar, FaRegEye, FaCodeBranch } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';

function RepoDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [branch, setBranch] = useState({});
    const [deployment, setDeployment] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/repos/faateeha/${id}`)
            .then(response => response.json())
            .then(data => {
                setDetails(data);
            })
    }, [])

    useEffect(() => {
        fetch(`https://api.github.com/repos/faateeha/${id}/branches`)
            .then(response => response.json())
            .then(data => {
                setBranch(data);
            })
    }, [])

    useEffect(() => {
        fetch(`https://api.github.com/repos/faateeha/${id}/deployments`)
            .then(response => response.json())
            .then(data => {
                setDeployment(data);
            })
    }, [])

    return (
        <Box id="repodetail" display="flex" justifyContent="center" marginTop="50px">
            <Box className="repodetail-card" width="400px" borderWidth="1px" borderRadius="md" padding="20px" color="white">
                <Text fontSize="24px" fontWeight="bold" marginBottom="10px" color="purple">{details.name}</Text>
                <Box className="repo-mini-details">
                    <Text marginBottom="5px">
                        <FaRegStar className="icons" />
                        stars: {details.stargazers_count}
                    </Text>
                    <Text marginBottom="5px">
                        <FaRegEye className="icons" />
                        Watch: {details.watchers}
                    </Text>
                    <Text marginBottom="5px">
                        <TbGitFork className="icons" />
                        Forks: {details.forks}
                    </Text>
                    <Text marginBottom="5px">
                        <FaCodeBranch className="icons" />
                        Branches: {branch.length}
                    </Text>
                </Box>
                <Text>Main language: {details.language === null ? "none" : details.language}</Text>
                <Text>
                    Live Site: {deployment.length === 0 ? "none" :
                        <ChakraLink href={`https://faateeha.github.io/${details.name}`} textDecoration="underline">
                            faateeha.github.io/{details.name}
                        </ChakraLink>
                    }
                </Text>
                <Text>
                    <ChakraLink href={`https://github.com/${details.full_name}`} textDecoration="underline">
                        View On Github
                    </ChakraLink>
                </Text>
                <Button colorScheme="purple" marginTop="20px" as={RouterLink} to="/">Go back to Home</Button>
            </Box>
        </Box>
    )
}

export default RepoDetails;
