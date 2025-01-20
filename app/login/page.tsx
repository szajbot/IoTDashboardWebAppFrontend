"use client";

import { title } from "@/components/primitives";
import { EyeSlashFilledIcon } from "@heroui/shared-icons";
import { EyeFilledIcon } from "@heroui/shared-icons";
import { Input } from "@heroui/input";
import {Button, ButtonGroup} from "@heroui/button";
import React from "react";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

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
    </div>
  );
}
