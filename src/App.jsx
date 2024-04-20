import Navbar from './Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './Pages/ErrorBoundary';
import ErrorPage from './Pages/ErrorPage';
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Change from BrowserRouter to Routes

function App() {
  return (
    <>
      <Helmet>
        <title>Faateeha's Github</title>
        <meta name="description" content="Faateeha's Github" />
      </Helmet>
      
        <ChakraProvider>
          <Router>
            <Navbar />
            <Routes> {/* Wrap Routes around Route components */}
              <Route path="/Error" element={<ErrorPage />} /> 
              <Route path="/error-boundary" element={<ErrorBoundary />} /> 
              
            </Routes>
          </Router>
        </ChakraProvider>
     
    </>
  )
}

export default App;

