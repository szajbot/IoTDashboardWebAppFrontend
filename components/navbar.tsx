"use client";

import React, { memo } from "react";
import { AcmeLogo } from "@/app/AcmeLogo";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  NavbarBrand, Avatar
} from "@nextui-org/react";
import { NavbarLoginComponent } from "@/components/helper";

const NextUINavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Dashboard", "Profile", "System", "Contact"];

  return (
    <Navbar
      isBordered
      className="bg-myGrey"
      height="5.5rem"
      isMenuOpen={isMenuOpen}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/*For small screen*/}
      <NavbarContent className="sm:hidden ml-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-myLightPurple text-2xl"
        />
        <NavbarBrand className="text-myLightPurple justify-center">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem className="lg:flex">
          <NavbarLoginComponent>
          </NavbarLoginComponent>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="min-h-screen bg-gray-900">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-myLightPurple text-4xl mx-8 my-2"
              href={item.toLocaleLowerCase()}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      {/*For others screen*/}
      <NavbarContent className="hidden sm:flex size-30" justify="center">
        <NavbarBrand className="text-myLightPurple mr-16 size-30 text-lg">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="text-myLightPurple text-lg" href={item.toLocaleLowerCase()}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem className="lg:flex">
          <NavbarLoginComponent>
          </NavbarLoginComponent>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default memo(NextUINavbar);