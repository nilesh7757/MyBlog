"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme_button";
const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-lg font-bold">MyBlog</div>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/"
            className="hover:font-semibold transition-transform scale-105 duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:font-semibold transition-transform scale-105 duration-300"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:font-semibold transition-transform scale-105 duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:font-semibold transition-transform scale-105 duration-300"
          >
            Contact
          </Link>
          <div>
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Sign Up
            </Button>
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <span className="mx-2"></span>
          <Sheet>
            <div className="flex items-center">
              <SheetTrigger>
                <div className="focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </div>
              </SheetTrigger>
              <ModeToggle className="size-52 bg-black" />
            </div>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-semibold cursor-pointer text-lg text-center my-5">
                  <Link href={"/"}>MyBlog</Link>
                </SheetTitle>
                <SheetDescription>
                  {/* <ModeToggle /> */}

                  <div className="flex flex-col space-y-5 items-center">
                    <Link
                      className="hover:font-semibold transition-transform scale-105 duration-300"
                      href="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="hover:font-semibold transition-transform scale-105 duration-300"
                      href="/about"
                    >
                      About
                    </Link>
                    <Link
                      className="hover:font-semibold transition-transform scale-105 duration-300"
                      href="/blog"
                    >
                      Blog
                    </Link>
                    <Link
                      className="hover:font-semibold transition-transform scale-105 duration-300"
                      href="/contact"
                    >
                      Contact
                    </Link>
                    <div>
                      <Button className="mx-1 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant="outline">
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
