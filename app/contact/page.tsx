"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import React from "react";
import { useNavbar } from "@/components/navbarContext";
import axios from "axios";
import qs from "qs";

export default function ContactPage() {

  const { isLoggedIn, toggleIsLoggedIn } = useNavbar();

  function logOut(e) {
    console.log("logOut");

    let data = qs.stringify({
      'refreshToken': sessionStorage.getItem("refresh_token")
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8081/api/v1/auth/logout',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios.request(config)
      .then((response) => {
        toggleIsLoggedIn(true);
        console.log(response.data);
        sessionStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function refreshToken(e) {
    let data = qs.stringify({
      'refresh_token': sessionStorage.getItem("refresh_token")
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8081/api/v1/auth/refresh',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios.request(config)
      .then((response) => {
        toggleIsLoggedIn(true);
        console.log(JSON.stringify(response.data));
        sessionStorage.setItem("refresh_token", JSON.stringify(response.data.refresh_token));
        sessionStorage.setItem("refresh_token", JSON.stringify(response.data.refresh_token));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Button
        color="secondary"
        className="max-w-xs mt-2 w-full"
        onPress={(e) => logOut(e)}
      >Log Out</Button>
      <Button
        color="secondary"
        className="max-w-xs mt-2 w-full"
        onPress={(e) => refreshToken(e)}
      >Refresh</Button>
    </div>
  );
}
