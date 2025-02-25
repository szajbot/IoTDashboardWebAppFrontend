"use client";

import React from "react";
import { Avatar, Link } from "@heroui/react";

export const NavbarLoginComponent = () => {

  const [accepted, setAccepted] = React.useState(false);

  React.useEffect(() => {
    if (window.sessionStorage.getItem('isLoggedIn')) {
      setAccepted(true);
    }
  }, []);

  if (accepted) {
    return (
      <div className="flex gap-5">
        <Avatar
          isBordered
          radius="full"
          size="md"
          src="https://nextui.org/avatars/avatar-1.png"
        />
        <h3>You are logged</h3>
      </div>
    );
  } else {
    <Link className="text-myLightPurple text-xl" href="login">
      Login
    </Link>;
  }

};
