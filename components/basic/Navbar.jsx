"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";
import Image from "next/image";
import logo from "@/public/logo.png";

function Navbar({ children }) {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    appwriteService
      .getAllData(conf.collections.nav)
      .then((res) => {
        setNavLinks(res.documents);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [navLinks]);

  return (
    <div className="drawer">
      <input id="main-nav" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar bg-base-300 w-full sticky top-0 lg:px-20">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="main-nav"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <MdMenu className="h-6 w-6" />
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <Image src={logo} height={100} width={100} className="h-7 w-auto" />
            <input
              type="checkbox"
              value="night"
              className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)] mx-2"
            />
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navLinks.map((link, index) =>
                link.dropDown ? (
                  <li key={index}>
                    <details>
                      <summary>{link.name}</summary>
                      <ul className="p-2">
                        {link.subLinks.map((subLink, index) => (
                          <li key={index}>
                            <Link href={subLink}>{link.subNames[index]}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={index}>
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
        {/* Page content here */}
        <main className="w-full min-h-[calc(100vh-260px)] flex justify-center items-center flex-col">
          {children}
        </main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="main-nav"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {navLinks.map((link, index) =>
            link.dropDown ? (
              <li key={index}>
                <summary>{link.name}</summary>
                <ul className="p-2">
                  {link.subLinks.map((subLink, index) => (
                    <li key={index}>
                      <Link href={subLink}>{link.subNames[index]}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={index}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <header className=" bg-color3 dark:bg-color2 text-color1 dark:text-color4">
      <nav className="fixed z-20 w-screen flex justify-evenly bg-color3 dark:bg-color2 text-color1 dark:text-color4 px-5 py-5 items-center">
        <div className="text-lg font-bold">
          <Link href="/"><img src="/logo.png" alt="logo" className="h-7" /></Link>
        
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
                          href={subLink}
                          key={index}
                        >
                          {link.subNames[index]}
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
      <div className="h-16"></div>
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
                      href={subLink}
                      key={index}
                    >
                      {link.subNames[index]}
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
        
      </div>
    </header> */
}
