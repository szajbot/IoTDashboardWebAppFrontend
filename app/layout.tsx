"use client";

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import React from "react";
import clsx from "clsx";
import { Link } from "@nextui-org/react";

import { fontSans } from "@/config/fonts";
import { NextUINavbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

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
        <div className="relative flex flex-col h-screen">
          <NextUINavbar />
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center py-3">
            <Link
              isExternal
              className="flex items-center gap-1 text-current"
              href="https://placehold.co/600x400"
              title="szajbot github"
            >
              <span className="text-default-600">Powered by</span>
              <p className="text-primary">Szajbot</p>
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
