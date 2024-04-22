import Navbar from './Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './Pages/ErrorBoundary';
import ErrorPage from './Pages/ErrorPage';
import AppOutlet from './Pages/AppOutlet';
import Home from './Pages/Home'
import RepoDetails from './Pages/RepoDetails'
import {  Routes, Route } from 'react-router-dom'; // Change from BrowserRouter to Routes

function App() {
  return (
    <>
      <Helmet>
        <title>Mubarak's Github</title>
        <meta name="description" content="Mubarak's Github" />
      </Helmet>
      
        <ChakraProvider>
          
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/repodetails" element={<AppOutlet />} >
              <Route path=":id" element={<RepoDetails />} />
              </Route>
              <Route path="/Error" element={<ErrorPage />} /> 
              <Route path="/error-boundary" element={<ErrorBoundary />} /> 
              
              </Routes>
         
          
        </ChakraProvider>
     
    </>
  )
}

export default App;

