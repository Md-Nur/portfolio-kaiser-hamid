"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

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

  return (
    <header className=" bg-color3 dark:bg-color2 text-color1 dark:text-color4">
      <nav className="fixed w-screen flex justify-evenly  bg-color3 dark:bg-color2 text-color1 dark:text-color4 px-5 py-5 items-center">
        <div className="text-lg font-bold">Kaiser</div>

        <div className="w-full text-sm hidden md:block max-w-[1000px]">
          <ul className="flex justify-evenly text-center">
            <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md" id="home">
              <Link className="hover:underline" aria-current="page" href="./">
                Home
              </Link>
            </li>
            <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
              <Link className="hover:underline" href="./education">
                Education
              </Link>
            </li>
            <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
              <Link className="hover:underline" href="./publication">
                Publication
              </Link>
            </li>

            <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md dropdown">
              <button className="flex focus:underline" onClick={handleDropdown}>
                Experience
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-color2 dark:text-color4"
                  aria-hidden="true"
                />
              </button>
              <div
                className={`absolute w-28 text-center ${dropdownDisplay} mt-2 space-y-2 rounded bg-color3 dark:bg-color2  group-hover:block`}
              >
                <Link
                  href="./research-experience"
                  className="block hover:bg-color4 dark:hover:bg-color1 rounded p-2"
                >
                  Research Experience
                </Link>
                <Link
                  href="./professional-experience"
                  className="block hover:bg-color4 dark:hover:bg-color1 rounded p-2"
                >
                  Professional Experience
                </Link>
              </div>
            </li>
            <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
              <Link className="hover:underline" href="./teaching">
                Teaching
              </Link>
            </li>
            <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
              <Link className="hover:underline" href="./skill">
                Skills
              </Link>
            </li>
            <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
              <Link className="hover:underline" href="./projects">
                Projects
              </Link>
            </li>
            <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
              <Link className="hover:underline" href="./achievements">
                Achievements
              </Link>
            </li>
            <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
              <Link className="hover:underline" href="./activites">
                Activities
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleMode}>
          <Image src={modePic} alt="Mode" width={20} height={20} />
        </div>
        <div className="md:hidden">
          <GiHamburgerMenu className="h-6 w-6" onClick={handleMenu} />
        </div>
      </nav>
      <div className="h-16">{/* buffer space */}</div>
      <div
        className={`w-full fixed bg-color3 dark:bg-color2 text-color1 dark:text-color4  bg-opacity-80 dark:bg-opacity-80 ${menuDisplay} md:hidden`}
      >
        <ul className="text-center">
          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md" id="home">
            <Link className="nav-link" aria-current="page" href="./">
              Home
            </Link>
          </li>
          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
            <Link className="nav-link" href="./edcucation">
              Education
            </Link>
          </li>
          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
            <Link className="nav-link" href="./publication">
              Publication
            </Link>
          </li>

          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
            <Link
              href="./research-experience"
              className=""
            >
              Research Experience
            </Link>
          </li>
          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
            <Link
              href="./professional-experience"
              className=""
            >
              Professional Experience
            </Link>
          </li>
          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
            <Link className="nav-link" href="./teaching">
              Teaching
            </Link>
          </li>
          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
            <Link className="nav-link" href="./skill">
              Skills
            </Link>
          </li>
          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
            <Link className="nav-link" href="./projects">
              Projects
            </Link>
          </li>
          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
            <Link className="nav-link" href="./achievements">
              Achievements
            </Link>
          </li>
          <li className="hover:bg-color4 dark:hover:bg-color1 p-1 rounded-md">
            <Link className="nav-link" href="./activites">
              Activities
            </Link>
          </li>
        </ul>
      </div>
      <div className={`h-80 ${menuDisplay} md:hidden`}>{/* buffer space */}</div>

    </header>
  );
}

export default Navbar;
