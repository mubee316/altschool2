import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import RepoDetails from './Pages/RepoDetails.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import AppOutlet from './Pages/AppOutlet.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { ChakraProvider, Box } from '@chakra-ui/react'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/repodetails"element={<AppOutlet />}>
        <Route path=":id" element={<RepoDetails />} />
        <Route path="*" element={<ErrorPage />} />

      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
    <ChakraProvider>
    <Box backgroundColor="black" minHeight="100vh" p="15px">
          <App />
          <RouterProvider router={router} />
    </Box>
    
    </ChakraProvider>
    </HelmetProvider>
  
);
