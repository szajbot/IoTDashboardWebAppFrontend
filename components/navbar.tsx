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
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );
  //
  // return (
  //   <NextUINavbar maxWidth="xl" position="sticky">
  //     <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
  //       <NavbarBrand as="li" className="gap-3 max-w-fit">
  //         <NextLink className="flex justify-start items-center gap-1" href="/">
  //           <Logo />
  //           <p className="font-bold text-inherit">ACME</p>
  //         </NextLink>
  //       </NavbarBrand>
  //       <ul className="hidden lg:flex gap-4 justify-start ml-2">
  //         {siteConfig.navItems.map((item) => (
  //           <NavbarItem key={item.href}>
  //             <NextLink
  //               className={clsx(
  //                 linkStyles({ color: "foreground" }),
  //                 "data-[active=true]:text-primary data-[active=true]:font-medium",
  //               )}
  //               color="foreground"
  //               href={item.href}
  //             >
  //               {item.label}
  //             </NextLink>
  //           </NavbarItem>
  //         ))}
  //       </ul>
  //     </NavbarContent>
  //
  //     <NavbarContent
  //       className="hidden sm:flex basis-1/5 sm:basis-full"
  //       justify="end"
  //     >
  //       <NavbarItem className="hidden sm:flex gap-2">
  //         <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
  //           <TwitterIcon className="text-default-500" />
  //         </Link>
  //         <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
  //           <DiscordIcon className="text-default-500" />
  //         </Link>
  //         <Link isExternal aria-label="Github" href={siteConfig.links.github}>
  //           <GithubIcon className="text-default-500" />
  //         </Link>
  //         <ThemeSwitch />
  //       </NavbarItem>
  //       <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
  //       <NavbarItem className="hidden md:flex">
  //         <Button
  //           isExternal
  //           as={Link}
  //           className="text-sm font-normal text-default-600 bg-default-100"
  //           href={siteConfig.links.sponsor}
  //           startContent={<HeartFilledIcon className="text-danger" />}
  //           variant="flat"
  //         >
  //           Sponsor
  //         </Button>
  //       </NavbarItem>
  //     </NavbarContent>
  //
  //     <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
  //       <Link isExternal aria-label="Github" href={siteConfig.links.github}>
  //         <GithubIcon className="text-default-500" />
  //       </Link>
  //       <ThemeSwitch />
  //       <NavbarMenuToggle />
  //     </NavbarContent>
  //
  //     <NavbarMenu>
  //       {searchInput}
  //       <div className="mx-4 mt-2 flex flex-col gap-2">
  //         {siteConfig.navMenuItems.map((item, index) => (
  //           <NavbarMenuItem key={`${item}-${index}`}>
  //             <Link
  //               color={
  //                 index === 2
  //                   ? "primary"
  //                   : index === siteConfig.navMenuItems.length - 1
  //                     ? "danger"
  //                     : "foreground"
  //               }
  //               href="#"
  //               size="lg"
  //             >
  //               {item.label}
  //             </Link>
  //           </NavbarMenuItem>
  //         ))}
  //       </div>
  //     </NavbarMenu>
  //   </NextUINavbar>
  // );
};
