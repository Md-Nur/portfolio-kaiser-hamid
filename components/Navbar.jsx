"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import useAuth from "@/context/useAuth";

const navLinks = [
  {
    name: "Home",
    link: "./",
  },
  {
    name: "Education",
    link: "./education",
  },
  {
    name: "Publication",
    link: "./publication",
  },
  {
    dropDown: true,
    name: "Experience",
    subLinks: [
      {
        name: "Research Experience",
        link: "./research-experience",
      },
      {
        name: "Professional Experience",
        link: "./professional-experience",
      },
    ],
  },
  {
    name: "Teaching",
    link: "./teaching",
  },
  {
    name: "Skills",
    link: "./skill",
  },
  {
    name: "Projects",
    link: "./projects",
  },
  {
    name: "Achievements",
    link: "./achievements",
  },
  {
    name: "Activities",
    link: "./activites",
  },
];

function Navbar() {
  const [dropdownDisplay, setDropdownDisplay] = useState("hidden");
  const [modePic, setModePic] = useState("/moon.png");
  const [menuDisplay, setMenuDisplay] = useState("hidden");

  const handleMode = () => {
    if (modePic === "/moon.png") {
      setModePic("/sun.png");
      document.getElementById("mainHtml").classList.add("dark");
    } else {
      setModePic("/moon.png");
      document.getElementById("mainHtml").classList.remove("dark");
    }
  };
  const handleDropdown = () => {
    if (dropdownDisplay === "hidden") {
      setDropdownDisplay("block");
    } else {
      setDropdownDisplay("hidden");
    }
  };

  const handleMenu = () => {
    if (menuDisplay === "hidden") {
      setMenuDisplay("block");
    } else {
      setMenuDisplay("hidden");
    }
  };

  const { authStatus } = useAuth();

  return (
    <header className=" bg-color3 dark:bg-color2 text-color1 dark:text-color4">
      <nav className="fixed z-40 w-screen flex justify-evenly bg-color3 dark:bg-color2 text-color1 dark:text-color4 px-5 py-5 items-center">
        <div className="text-lg font-bold">Kaiser</div>

        <div className="min-w-[800px] text-sm font-bold hidden lg:block max-w-[1000px]">
          <ul className="flex justify-evenly text-center">
            {navLinks.map((link, key) => {
              if (link.dropDown) {
                return (
                  <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md dropdown">
                    <button
                      className="flex focus:underline"
                      onClick={handleDropdown}
                    >
                      {link.name}
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-color1 dark:text-color4"
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={`absolute w-28 text-center ${dropdownDisplay} mt-2 space-y-2 rounded bg-color4 dark:bg-color1`}
                    >
                      {link.subLinks.map((subLink, key) => (
                        <Link
                          className="hover:underline block"
                          aria-current="page"
                          href={subLink.link}
                          id={key}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }
              return (
                <li
                  className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md"
                  id={key}
                >
                  <Link
                    className="hover:underline"
                    aria-current="page"
                    href={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={modePic} alt="Mode" onClick={handleMode} width={20} height={20} />
          <Link
            href={authStatus ? "/logout" : "/admin"}
            className="rounded-md border border-color1 dark:border-color4 p-2 text-sm font-semibold hover:text-color4 hover:bg-color1 dark:hover:bg-color4 dark:hover:text-color1"
          >
            {authStatus ? "Logout" : "Log In"}
          </Link>
        </div>
        {/* <div className="">
                    <Link
                        href={authStatus ? "/profile" : "/signup"}
                        className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        {authStatus ? "Profile" : "Sign up"}
                    </Link>
                    
                </div> */}
        <div className="lg:hidden">
          <GiHamburgerMenu className="h-6 w-6" onClick={handleMenu} />
        </div>
      </nav>
      <div className="h-16">{/* buffer space */}</div>
      <div
        className={`w-full fixed z-40 bg-color3 dark:bg-color2 text-color1 dark:text-color4  bg-opacity-80 dark:bg-opacity-80 ${menuDisplay} md:hidden`}
      >
        <ul className="text-center">
          {navLinks.map((link, key) => {
            if (link.dropDown) {
              return (
                <li className="">
                  {link.subLinks.map((subLink, key) => (
                    <Link
                      className="hover:underline hover:bg-color4 dark:hover:bg-color1 block"
                      aria-current="page"
                      href={subLink.link}
                      id={key}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </li>
              );
            }

            return (
              <li
                className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md"
                id={key}
              >
                <Link
                  className="hover:underline"
                  aria-current="page"
                  href={link.link}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`h-80 ${menuDisplay} md:hidden`}>
        {/* buffer space */}
      </div>
    </header>
  );
}

export default Navbar;
