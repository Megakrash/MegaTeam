import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

import UserContext from "./context/UserContext";

const Home = lazy(() => import("@pages/Home"));
const NavBar = lazy(() => import("@components/navbar/NavBar"));

function App() {
  const [userContext] = useState({
    userToken: "",
    id: "",
  });

  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="spinner" />
            <p>Loading</p>
          </div>
        }
      >
        <UserContext.Provider value={userContext}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </UserContext.Provider>
      </Suspense>
    </div>
  );
}

export default App;
