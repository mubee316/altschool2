
import Navbar from './Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './Pages/ErrorBoundary';


function App() {
return(
  <>
  <Helmet>
    <title>Faateeha's Github</title>
    <meta name="description" content="Faateeha's Github" />
  </Helmet>
  <ErrorBoundary>
  <ChakraProvider>
  <Navbar />
  </ChakraProvider>
  </ErrorBoundary>
  </>
)
}

export default App
