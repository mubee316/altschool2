import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.jsx";

import { HelmetProvider } from "react-helmet-async";
import { ChakraProvider, Box } from "@chakra-ui/react";





const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <ChakraProvider>
    <BrowserRouter>
    
      <ErrorBoundary fallback={<div>Oops! something went wrong</div>}>
      <Box backgroundColor="cream" minHeight="100vh" p="15px">
        <App />
        
      </Box>
      </ErrorBoundary>

    </BrowserRouter>
    </ChakraProvider>
  </HelmetProvider>
);
