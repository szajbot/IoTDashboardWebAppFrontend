"use client";

import React from "react";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  NavbarBrand,
} from "@nextui-org/react";

import { AcmeLogo } from "@/app/AcmeLogo";

export const NextUINavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Dashboard", "Profile", "System", "Contact"];

  return (
    <Navbar
      isBordered
      className="bg-gray-800"
      height="5.5rem"
      isMenuOpen={isMenuOpen}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/*For small screen*/}
      <NavbarContent className="sm:hidden ml-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-purple-600 text-2xl"
        />
        <NavbarBrand className="text-purple-600 justify-center">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem className="lg:flex">
          <Link className="text-purple-600" href="#">
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="min-h-screen bg-gray-900">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-purple-600"
              href={item.toLocaleLowerCase()}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      {/*For others screen*/}
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarBrand className="text-purple-600 mr-16 size-22">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="text-purple-600" href={item.toLocaleLowerCase()}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem className="lg:flex">
          <Link className="text-purple-600" href="login">
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
