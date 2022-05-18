import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import InitialScreen from "./Components/InitialScreen/InitialScreen";

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<InitialScreen />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
