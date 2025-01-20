// "use client";

import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

const NavbarContext = createContext({});

export const NavbarProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = sessionStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus));  // Parse the stored string to boolean
    }
  }, []);

  const toggleIsLoggedIn = () => {
    const newLoginStatus = !isLoggedIn;
    setIsLoggedIn(newLoginStatus);
    sessionStorage.setItem("isLoggedIn", JSON.stringify(newLoginStatus));  // Persist the state
  };

  return (
    <NavbarContext.Provider value={{isLoggedIn, toggleIsLoggedIn}}>
      {children}
    </NavbarContext.Provider>
  )
}

export const useNavbar = () => useContext(NavbarContext);