"use client";
import Link from "next/link";
import ThemeChanger from "./darkswitch";
import Image from "next/image"
import Logo from '../public/logos/logo.png'
import { Disclosure } from "@headlessui/react";
import SigninLandingpage from "@/app/(allroutes)/(publicroutes)/authpages/signinpage/signinlandingpage";

const HomeNavbar = () => {
  const navigation = [
    {name: "Home",
     link: "/"
    },
    {name: "About",
     link: '/aboutpage'
    },
    {name: "Contact",
     link: 'contactpage'
    },
    {name: "My Afros",
     link: 'https://myafros.com'
    },
    {name: "Blog",
     link: 'https://blog.myafros.com'
    },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between ">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src={Logo}
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>MyAfros CRM</span>
                  </span>
                </Link>

                
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.link} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <SigninLandingpage />

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar
