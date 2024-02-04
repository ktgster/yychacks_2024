
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { t} = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const items = [
    {
      id: 1,
      name: "navbar.items.works",
      path: "/",
      logo: null,
      style: "",
    },
    {
      id: 2,
      name: "navbar.items.support",
      path: "/",
      logo: null,
      style: "",
      // subItems: [
      //   {
      //     name: "FAQ",
      //     path: "/about/faq",
      //     style: " text-white hover:text-violet-600 hidden",
      //   },
      // ],
    },
    {
      id: 3,
      name: "navbar.items.host",
      path: "/",
      logo: null,
      style: "",
    }
  ];

  const quote = [
    {
      id: 1,
      name: "navbar.quote.login",
      path: "/quote",
      logo: null,
      style:
        "flex lg:ml-8 lg:py-2 md:px-2 py-2  lg:px-7 lg:font-bold justify-center text-center items-center lg:text-lg outline   md:text-md py-1 rounded-md",
    },
  ];


  return (
    <div
      className={`flex fixed gap-5 justify-between items-center w-full px-4 py-10 h-24 z-10 text-white md:justify-start md:bg-transparent md:${
        visible ? "" : "hidden"
      }`}
      style={{ transition: "opacity 0.3s ease-in-out" }}
    >
      {/* logo */}
      <img loading="lazy" src="../images/domi-wordmark.png" alt="logo" style={{height: "40px"}}/>
      {/*<div className="hidden md:flex cursor-pointer  z-0">
        <Link href="/">
          { <Image src={Logo} alt="logo" width={100} height={100} /> }
        </Link>
      </div>*/}

      {/* items nav bar */}
      <ul className="hidden md:flex">
        {items.map((item, index) => (
          <li
            key={index}
            className=" flex md:px-4 cursor-pointer hover:scale-105 capitalize duration-200"
          >
            <Link
              href={item.path}
              className={"hover:text-[#c8102f] md:text-xl" + item.style}
            >
              {t(item.name)}
            </Link>
          </li>
        ))}
      </ul>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfab6d21a3cd0885eb313acdbbe7b6198b4ab077516163d5a8e41ca8232b12d1?"
        className="hidden md:flex aspect-square w-[50px] ml-auto"
      />

      <a href={"https://www.bing.com"} target="_blank">
        <button
          className="hidden md:flex lg:font-bold justify-center text-center items-center lg:text-lg bg-white text-black rounded-[100px] px-5 py-2 mr-4 hover:scale-105"
          style={{ transition: "0.35s ease-in-out" }}
        >
        </button>
      </a>

      {/* for quote on md screen */}

      {/*<ul className="hidden md:flex">
        {quote.map((item, index) => (
          <li key={index}>
            <Link href={item.path} className={item.style}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>*/}

      {/* for socials */}

      {/* <ul className="hidden lg:flex">
        {socials.map((item, index) => (
          <li
            key={index}
            className=" flex md:px-4 text-lg lg:px-10 cursor-pointer"
          >
            <Link href={item.path} target="_blank">
              <Image
                src={item.logo}
                alt={item.name}
                width={30}
                height={30}
                className={item.style + ""}
              />
            </Link>
          </li>
        ))}
      </ul> */}

      {/* For nav bar for mobile */}
      <div className=" justify-between flex flex-row   w-full md:hidden">
        {/* <div
          onClick={() => setNav(!nav)}
          className=" cursor-pointer z-10 text-white outline py-2  ml-1
           justify-center bg-gradient-to-r from-purple-500 to-[#C14197] rounded-lg mr-2 items-center flex top-0 left-0 w-1/2 md:hidden"
        >
          {nav ? (
            <div className="flex">
              <FaTimes size={30} />
              <span className="ml-2 text-xl">Close</span>
            </div>
          ) : (
            <div className="flex">
              <FaBars size={30} />
              <span className="ml-2 text-2xl font-bold">Menu</span>
            </div>
          )}
        </div> */}
        {/*<ul className="flex outline justify-center z-10 items-center  w-1/2 mr-1 bg-gradient-to-r from-[#C14197] to-red-600 rounded-lg md:hidden">
          {quote.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={
                  "flex text-xl text-center rounded-md font-semibold p-1 "
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>*/}
      </div>
      {nav && (
        <ul className="flex flex-col pl-4 absolute top-16 left-0 rounded-lg justify-center w-full h-screen py-16 text-xl  bg-gradient-to-r from-purple-500 to-red-600">
          {items.map((item, index) => (
            <li
              key={index}
              className="mx-5 cursor-pointer capitalize my-3 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                href={item.path}
                className={item.style + " ml-4"}
              >
                {item.name}**
              </Link>
            </li>
          ))}
          <div className="flex my-12">
            {/*{quote.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={"ml-10 py-3 mt-22  " + item.style}
                >
                  {item.name}
                </Link>
              </li>
            ))}*/}
          </div>

          {/* <div className="flex flex-row justify-center">
            {socials.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  target="_blank"
                  className="mr-4 my-4 flex flex-row"
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={30}
                    height={30}
                    className={item.style + ""}
                  />
                </Link>
              </li>
            ))}
          </div> */}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
