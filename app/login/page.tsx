"use client";

import { title } from "@/components/primitives";
import { EyeSlashFilledIcon } from "@heroui/shared-icons";
import { EyeFilledIcon } from "@heroui/shared-icons";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import React from "react";
import { useNavbar } from "@/components/navbarContext";
import { login } from "./actions";
import { updateAccessToken, updateRefreshToken } from "@/components/userUtils";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [userPassword, setUserPassword] = React.useState([]);
  const [userLogin, setUserLogin] = React.useState([]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { isLoggedIn, toggleIsLoggedIn } = useNavbar();

  const router = useRouter()

  function handlePasswordChange(event) {
    setUserPassword(event.target.value);
  }

  function handleLoginChange(event) {
    setUserLogin(event.target.value);
  }

  async function sendLogIn(e) {
    setIsLoading(true);

    const credentials = {
      "password": userPassword,
      "username": userLogin
    };

    let result = await login(credentials);
    console.log(result);

    if (result.error === undefined) {
      updateAccessToken(result.access_token);
      updateRefreshToken(result.refresh_token);
      toggleIsLoggedIn(true);
      router.push('/dashboard')
    } else {
      setError(result.error[0]);
    }
    setIsLoading(false);
  }

  return (
    <div>
      <h2 className={title()}>Please Log In</h2>

      {error && <p className="text-red-500 mt-2">{error}</p>}

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
