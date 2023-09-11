"use client";
import Link from "next/link";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Education",
    link: "/education",
  },
  {
    name: "Publication",
    link: "/publication",
  },
  {
    dropDown: true,
    name: "Experience",
    subLinks: [
      {
        name: "Research Experience",
        link: "/research-experience",
      },
      {
        name: "Professional Experience",
        link: "/professional-experience",
      },
    ],
  },
  {
    name: "Teaching",
    link: "/teaching",
  },
  {
    name: "Skills",
    link: "/skill",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Achievements",
    link: "/achievements",
  },
  {
    name: "Activities",
    link: "/activites",
  },
];

function Navbar() {
  const [dropdownDisplay, setDropdownDisplay] = useState("hidden");
  const [modeIcon, setModeIcon] = useState("lightMode");
  const [menuDisplay, setMenuDisplay] = useState("hidden");

  const handleMode = () => {
    if (modeIcon === "darkMode") {
      document.getElementById("mainHtml").classList.remove("dark");
      setModeIcon("lightMode");
    } else {
      document.getElementById("mainHtml").classList.add("dark");
      setModeIcon("darkMode");
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

  return (
    <header className=" bg-color3 dark:bg-color2 text-color1 dark:text-color4">
      <nav className="fixed z-40 w-screen flex justify-evenly bg-color3 dark:bg-color2 text-color1 dark:text-color4 px-5 py-5 items-center">
        <div className="text-lg font-bold">
          <Link href="/">Kaiser</Link>
        </div>

        <div className="min-w-[800px] text-sm font-bold hidden lg:block max-w-[1000px]">
          <ul className="flex justify-evenly text-center">
            {navLinks.map((link, index) => {
              if (link.dropDown) {
                return (
                  <li
                    key={index}
                    className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md dropdown"
                  >
                    <button
                      className="flex focus:underline"
                      onClick={handleDropdown}
                    >
                      {link.name}
                      <AiFillCaretDown className="-mr-1 h-5 w-5 text-color1 dark:text-color4" />
                    </button>
                    <div
                      className={`absolute w-28 text-center ${dropdownDisplay} mt-2 space-y-2 rounded bg-color4 dark:bg-color1`}
                    >
                      {link.subLinks.map((subLink, index) => (
                        <Link
                          className="hover:underline block"
                          aria-current="page"
                          href={subLink.link}
                          key={index}
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
                  key={index}
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
        <div className="flex justify-around w-full max-w-[100px] sm:max-w-xs lg:w-auto lg:gap-5 items-center">
          <button onClick={handleMode}>
            {modeIcon === "lightMode" ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
          <Link
            href="/profile"
            className="rounded-full border border-color1 dark:border-color4 p-2 font-semibold hover:text-color4 hover:bg-color1 dark:hover:bg-color4 dark:hover:text-color1"
          >
            <BiSolidUser />
          </Link>
        </div>
        <div className="lg:hidden" onClick={handleMenu}>
          <GiHamburgerMenu className="h-6 w-6" />
        </div>
      </nav>
      <div className="h-16">{/* buffer space */}</div>
      <div
        className={`w-full fixed z-40 bg-color3 dark:bg-color2 text-color1 dark:text-color4  bg-opacity-80 dark:bg-opacity-80 ${menuDisplay} lg:hidden`}
      >
        <ul className="text-center">
          {navLinks.map((link, index) => {
            if (link.dropDown) {
              return (
                <li key={index}>
                  {link.subLinks.map((subLink, index) => (
                    <Link
                      className="hover:underline hover:bg-color4 dark:hover:bg-color1 block"
                      aria-current="page"
                      href={subLink.link}
                      key={index}
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
                key={index}
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
