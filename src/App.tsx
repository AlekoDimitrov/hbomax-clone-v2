import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import InitialScreen from "./Components/InitialScreen/InitialScreen";
import "@fontsource/urbanist";
import { UsersContext } from "./Helper/Context";

const theme = extendTheme({
  fonts: {
    body: "Urbanist, sans-serif",
  },
});

function App() {
  const [users, setUsers]: any = useState([]);

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Router>
          <UsersContext.Provider value={{ users, setUsers }}>
            <Routes>
              <Route path="/" element={<InitialScreen />} />
            </Routes>
          </UsersContext.Provider>
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
