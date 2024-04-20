import { useEffect, useState } from 'react';
import { useParams, Link as RouterLink, Navigate } from 'react-router-dom';
import { Box, Text, Link as ChakraLink, Button } from '@chakra-ui/react';
import { FaRegStar, FaRegEye, FaCodeBranch } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';

function RepoDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [branch, setBranch] = useState({});
    const [deployment, setDeployment] = useState({});
    const [notFound, setNotFound] = useState(false); // State to track if repository not found

    useEffect(() => {
        fetch(`https://api.github.com/repos/faateeha/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    setNotFound(true); // Set notFound state to true if repository not found
                    return null;
                }
            })
            .then(data => {
                if (data) {
                    setDetails(data);
                }
            })
            .catch(error => {
                console.error("Error fetching repository details:", error);
                setNotFound(true); // Set notFound state to true on error
            });
    }, []);

    useEffect(() => {
        if (!notFound) { // Fetch branches and deployment only if repository is found
            fetch(`https://api.github.com/repos/faateeha/${id}/branches`)
                .then(response => response.json())
                .then(data => {
                    setBranch(data);
                })
                .catch(error => {
                    console.error("Error fetching branches:", error);
                });

            fetch(`https://api.github.com/repos/faateeha/${id}/deployments`)
                .then(response => response.json())
                .then(data => {
                    setDeployment(data);
                })
                .catch(error => {
                    console.error("Error fetching deployments:", error);
                });
        }
    }, [notFound]);

    // If repository not found, navigate to the error page
    if (notFound) {
        return <Navigate to="/error" />;
    }

    // Render repository details if found
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
    );
}

export default RepoDetails;

