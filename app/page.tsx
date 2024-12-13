"use client";

import React from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Dashboard", "Profile", "System", "Contact"];

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}
