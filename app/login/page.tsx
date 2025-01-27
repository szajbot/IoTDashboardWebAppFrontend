"use client";

import { title } from "@/components/primitives";
import { EyeSlashFilledIcon } from "@heroui/shared-icons";
import { EyeFilledIcon } from "@heroui/shared-icons";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavbar } from "@/components/navbarContext";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [userPassword, setUserPassword] = React.useState([]);
  const [userLogin, setUserLogin] = React.useState([]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { toggleIsLoggedIn, isLoggedIn } = useNavbar();

  function handlePasswordChange(event) {
    setUserPassword(event.target.value);
  }

  function handleLoginChange(event) {
    setUserLogin(event.target.value);
  }

  function sendLogIn(e) {
    setIsLoading(true);

    const body = {
      login: userLogin,
      password: userPassword
    };

    axios.post("http://localhost:8081/api/v1/auth/login", body)
      .then((res) => {
        setIsLoading(false);
        toggleIsLoggedIn();
        console.log("RESPONSE RECEIVED: ", res);
      }).catch((err) => {
      setIsLoading(false);
      console.log("AXIOS ERROR: ", err);
    });
  }

  return (
    <div>
      <h2 className={title()}>Please Log In</h2>
      <Input
        className="max-w-xs mt-6"
        onChange={handlePasswordChange}
        label="Login"
        type="login"
        variant="bordered" />
      <Input
        className="max-w-xs mt-2"
        onChange={handleLoginChange}
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
