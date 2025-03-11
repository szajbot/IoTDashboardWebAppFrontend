"use client";
import { Button } from "@heroui/button";
import React from "react";
import { useNavbar } from "@/components/navbarContext";
import { logout } from "./actions";
import { clearSession, getAccessToken, getRefreshToken } from "@/components/userUtils";

export default function ContactPage() {

  const { isLoggedIn, toggleIsLoggedIn } = useNavbar();

  async function logOut(e) {
    console.log("client side logging out");

    let accessToken = getAccessToken()
    let refreshToken = getRefreshToken()

    let response = await logout(accessToken, refreshToken)

    if (response.error === undefined) {
      clearSession()
    } else {
      console.log(response.error)
    }
    toggleIsLoggedIn(false);
    window.location.reload()

  }

  return (
    <div>
      <Button
        color="secondary"
        className="max-w-xs mt-2 w-full"
        onPress={(e) => logOut(e)}
      >Log Out</Button>
      {/*<Button*/}
      {/*  color="secondary"*/}
      {/*  className="max-w-xs mt-2 w-full"*/}
      {/*  onPress={(e) => refreshToken(e)}*/}
      {/*>Refresh</Button>*/}
    </div>
  );
}
