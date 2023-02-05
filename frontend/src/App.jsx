import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import UserContext from "./context/UserContext";

const Home = lazy(() => import("@pages/Home"));
const NavBar = lazy(() => import("@components/navbar/NavBar"));
const SignIn = lazy(() => import("@components/signin/SignIn"));
const Login = lazy(() => import("@components/login/Login"));
const Profil = lazy(() => import("@components/profil/Profil"));
const Team = lazy(() => import("@components/team/Team"));

function App() {
  const [userContext, setUserContext] = useState({
    id: "",
    userToken: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserContext(JSON.parse(localStorage.getItem("token")));
    }
  }, []);

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
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/login"
              element={<Login setUserContext={setUserContext} />}
            />
            <Route path="/profil" element={<Profil />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </UserContext.Provider>
      </Suspense>
    </div>
  );
}

export default App;
