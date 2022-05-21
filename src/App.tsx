import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import InitialScreen from "./Components/InitialScreen/InitialScreen";
import "@fontsource/urbanist";
import {
  BackgroundContext,
  PassedUserContext,
  UsersContext,
} from "./Helper/Context";

const theme = extendTheme({
  fonts: {
    body: "Urbanist, sans-serif",
  },
});

function App() {
  const [users, setUsers]: any = useState([
    {
      name: "Guest",
      userTheme: {
        avatarBackground:
          "linear-gradient(140deg, #ff83e2, #fd04c4) border-box",
        background:
          "linear-gradient(90deg, #5b135e 0%, #251e6f 100%) border-box",
      },
    },
  ]);
  const [background, setBackground] = useState({
    background: "linear-gradient(90deg, #5b135e 0%, #251e6f 100%) border-box",
    avatarBackground: "linear-gradient(140deg, #ff83e2, #fd04c4) border-box",
  });

  const [passedUser, setPassedUser] = useState({
    userDetails: {
      name: "Guest",
      userTheme: {
        avatarBackground:
          "linear-gradient(140deg, #ff83e2, #fd04c4) border-box",
        background:
          "linear-gradient(90deg, #5b135e 0%, #251e6f 100%) border-box",
      },
    },
    userIdentifier: 0,
  });

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Router>
          <UsersContext.Provider value={{ users, setUsers }}>
            <BackgroundContext.Provider value={{ background, setBackground }}>
              <PassedUserContext.Provider value={{ passedUser, setPassedUser }}>
                <InitialScreen />
              </PassedUserContext.Provider>
            </BackgroundContext.Provider>
          </UsersContext.Provider>
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
