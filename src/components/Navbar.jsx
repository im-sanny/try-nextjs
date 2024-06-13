"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handler = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard"))
    return <div className="bg-green-400">Dashboard layout</div>;

  return (
    <div>
      <nav className="bg-teal-500 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Hello <span className="text-yellow-300">Next</span>
        </h1>
        <ul className="flex justify-center items-center space-x-4">
          {links.map((link) => (
            <Link
              className={`font-semibold ${
                pathName === link.path && "text-yellow-300"
              }`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <button
          onClick={handler}
          className="bg-white bg text-teal-700 font-bold p-2 rounded-md"
        >
          Login
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
