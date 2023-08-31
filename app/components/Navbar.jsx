"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
function Navbar() {
  const [dropdownDisplay, setDropdownDisplay] = useState("hidden");
    const [modePic, setModePic] = useState("moon");
    const handleMode = () => {
        if (modePic === "moon") {
            setModePic("sun");
        } else {
            setModePic("moon");
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
    <nav className="flex justify-between bg-purple-300 px-24 py-5 items-center ">
      <div className="text-lg">Kaiser</div>
      
      <div className="w-full px-16 text-sm">
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
            <button className="flex focus:outline-none" onClick={handleDropdown}>
              Experience
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
            <div
              className={`absolute w-28 text-center ${dropdownDisplay} mt-2 space-y-2 bg-purple-200 rounded text-gray-700 group-hover:block`}
            >
              <Link href="#" className="block hover:bg-purple-400 rounded p-2">
                Research Experience
              </Link>
              <Link href="#" className="block hover:bg-purple-400 rounded p-2">
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
       <Image src={`/${modePic}.png`} alt="Picture of the author" width={20} height={20} />
      </div>
    </nav>
  );
}

export default Navbar;
