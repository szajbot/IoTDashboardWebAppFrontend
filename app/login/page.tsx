"use client";

import { title } from "@/components/primitives";
import { EyeSlashFilledIcon } from "@heroui/shared-icons";
import { EyeFilledIcon } from "@heroui/shared-icons";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import React, { useEffect } from "react";
import {useNavbar} from "@/components/navbarContext";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { toggleIsLoggedIn, isLoggedIn } = useNavbar();

  function sendLogIn(e) {
    console.log("State before login: " + isLoggedIn);  // Pokaże poprzedni stan (przed wywołaniem setIsLoggedIn)

    setIsLoading(true);
    // Placeholder for login request
    setTimeout(() => {
      setIsLoading(false);
      console.log("Changing state!");
      toggleIsLoggedIn();  // Wywołujemy funkcję do zmiany stanu
      // Nie sprawdzamy stanu od razu, bo jest to asynchroniczne
    }, 1000);
  }

  return (
    <div>
      <h2 className={title()}>Please Log In</h2>
      <Input
        className="max-w-xs mt-6"
        label="Login"
        type="login"
        variant="bordered" />
      <Input
        className="max-w-xs mt-2"
        endContent={
          <button
            aria-label="toggle password visibility"
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        label="Password"
        type={isVisible ? "text" : "password"}
        variant="bordered"
      />
      <Button
        color="secondary"
        className="max-w-xs mt-2 w-full"
        isLoading={isLoading}
        onPress={(e) => sendLogIn(e)}
      >Log In</Button>
    </div>
  );
}
