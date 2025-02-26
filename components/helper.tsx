"use client";

import React from "react";
import { Avatar, Link } from "@heroui/react";

export default function NavbarLoginComponent(accepted) {
  if (accepted === 1) {
    return (
      <div className="flex gap-5">
        <Avatar
          isBordered
          radius="full"
          size="sm"
          src="https://nextui.org/avatars/avatar-1.png"
        />
        <h3>You are logged</h3>
      </div>
    );
  } else if (accepted === 2) {
    return (
      <Link className="text-myLightPurple text-xl" href="login">
        Login
      </Link>
    );
  } else {
    return (
      <div></div>
    );
  }

};
