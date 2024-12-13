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
import { title } from "@/components/primitives";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Dashboard", "Profile", "System", "Contact"];

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );

  // return (
  //   <Navbar
  //     isBordered
  //     className="bg-gray-800"
  //     height="5rem"
  //     isMenuOpen={isMenuOpen}
  //     onMenuOpenChange={setIsMenuOpen}
  //     maxWidth="full"
  //   >
  //     {/*For small screen*/}
  //     <NavbarContent className="sm:hidden ml-4">
  //       <NavbarMenuToggle
  //         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
  //         className="text-purple-600 text-2xl"
  //       />
  //       <NavbarBrand className="text-purple-600 justify-center">
  //         <AcmeLogo />
  //         <p className="font-bold text-inherit">ACME</p>
  //       </NavbarBrand>
  //       <NavbarItem className="lg:flex">
  //         <Link className="text-purple-600" href="#">
  //           Login
  //         </Link>
  //       </NavbarItem>
  //     </NavbarContent>
  //
  //     <NavbarMenu className="min-h-full bg-gray-900">
  //       {menuItems.map((item, index) => (
  //         <NavbarMenuItem key={`${item}-${index}`}>
  //           <Link className="text-purple-600" href="#">
  //             {item}
  //           </Link>
  //         </NavbarMenuItem>
  //       ))}
  //     </NavbarMenu>
  //
  //     {/*For others screen*/}
  //     <NavbarContent className="hidden sm:flex" justify="center">
  //       <NavbarBrand className="text-purple-600 mr-16 size-22">
  //         <AcmeLogo />
  //         <p className="font-bold text-inherit">ACME</p>
  //       </NavbarBrand>
  //     </NavbarContent>
  //     <NavbarContent className="hidden sm:flex" justify="center">
  //       {menuItems.map((item, index) => (
  //         <NavbarMenuItem key={`${item}-${index}`}>
  //           <Link className="text-purple-600" href="#">
  //             {item}
  //           </Link>
  //         </NavbarMenuItem>
  //       ))}
  //     </NavbarContent>
  //     <NavbarContent className="hidden sm:flex" justify="center">
  //       <NavbarItem className="lg:flex">
  //         <Link className="text-purple-600" href="#">
  //           Login
  //         </Link>
  //       </NavbarItem>
  //     </NavbarContent>
  //   </Navbar>
  // );
}

//   return (
//     <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//       <div className="inline-block max-w-xl text-center justify-center">
//         <span className={title()}>Make&nbsp;</span>
//         <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
//         <br />
//         <span className={title()}>
//           websites regardless of your design experience.
//         </span>
//         <div className={subtitle({ class: "mt-4" })}>
//           Beautiful, fast and modern React UI library.
//         </div>
//       </div>
//
//       <div className="flex gap-3">
//         <Link
//           isExternal
//           className={buttonStyles({
//             color: "primary",
//             radius: "full",
//             variant: "shadow",
//           })}
//           href={siteConfig.links.docs}
//         >
//           Documentation
//         </Link>
//         <Link
//           isExternal
//           className={buttonStyles({ variant: "bordered", radius: "full" })}
//           href={siteConfig.links.github}
//         >
//           <GithubIcon size={20} />
//           GitHub
//         </Link>
//       </div>
//
//       <div className="mt-8">
//         <Snippet hideCopyButton hideSymbol variant="bordered">
//           <span>
//             Get started by editing <Code color="primary">app/page.tsx</Code>
//           </span>
//         </Snippet>
//       </div>
//     </section>
//   );
// }
