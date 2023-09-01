"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
function Navbar() {
  const [dropdownDisplay, setDropdownDisplay] = useState("hidden");
  const [modePic, setModePic] = useState("/moon.png");
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
  return (
    <header>
      <nav className="fixed w-screen flex justify-evenly bg-color3 dark:bg-color2 text-color1 dark:text-color4 px-5 py-5 items-center">
        <div className="text-lg font-bold">Kaiser</div>

        <div className="w-full text-sm hidden md:block max-w-[1000px]">
          <ul className="flex justify-evenly text-center">
            <li className="nav-item" id="home">
              <Link className="nav-link" aria-current="page" href="./">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="education.html">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="publication.html">
                Publication
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="flex focus:outline-none"
                onClick={handleDropdown}
              >
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
                  href="#"
                  className="block hover:bg-color4 dark:hover:bg-color1 rounded p-2"
                >
                  Research Experience
                </Link>
                <Link
                  href="#"
                  className="block hover:bg-color4 dark:hover:bg-color1 rounded p-2"
                >
                  Professional Experience
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="teaching.html">
                Teaching
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="skills.html">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="projects.html">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="achievements.html">
                Achievements
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="activities.html">
                Activities
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleMode}>
          <Image src={modePic} alt="Mode" width={20} height={20} />
        </div>
        <div className="w-full text-sm hidden">
          <ul className="flex justify-evenly text-center">
            <li className="nav-item" id="home">
              <Link className="nav-link" aria-current="page" href="./">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="education.html">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="publication.html">
                Publication
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="flex focus:outline-none"
                onClick={handleDropdown}
              >
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
                  href="#"
                  className="block hover:bg-color4 dark:hover:bg-color1 rounded p-2"
                >
                  Research Experience
                </Link>
                <Link
                  href="#"
                  className="block hover:bg-color4 dark:hover:bg-color1 rounded p-2"
                >
                  Professional Experience
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="teaching.html">
                Teaching
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="skills.html">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="projects.html">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="achievements.html">
                Achievements
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="activities.html">
                Activities
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="h-16">{/* buffer space */}</div>
    </header>
  );
}

export default Navbar;
