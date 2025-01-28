"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import React from "react";
import { useNavbar } from "@/components/navbarContext";

export default function ContactPage() {

  const { isLoggedIn, toggleIsLoggedIn } = useNavbar();

  function logOut(e) {
    toggleIsLoggedIn(false);
    sessionStorage.clear();
  }

  return (
    <div>
      <Button
        color="secondary"
        className="max-w-xs mt-2 w-full"
        onPress={(e) => logOut(e)}
      >Log Out</Button>
    </div>
  );
}
