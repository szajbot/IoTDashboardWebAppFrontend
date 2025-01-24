"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import React from "react";
import clsx from "clsx";
import { Link } from "@nextui-org/react";

import { fontSans } from "@/config/fonts";
import Providers from "@/app/providers";
import NextUINavbar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark2" }}>
          <div className="flex flex-col h-screen w-full h-full">
            <NextUINavbar />
            <main className="w-full h-full">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/szajbot"
                title="szajbot github"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Szajbot</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
