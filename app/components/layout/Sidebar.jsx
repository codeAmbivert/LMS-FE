"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    title: "Dashboard",
    link: {
      admin: "/admin/dashboard",
      lecturer: "/lecturer/dashboard",
      student: "/student/dashboard",
    },
    tags: ["admin", "lecturer", "student"],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [tag, setTag] = useState("lecturer");

  const renderLink = () => {
    return links.map((item, i) => (
      <Link
        key={i}
        href={item.link[tag]}
        className={`p-2 rounded-md ${
          !item.tags.includes(tag) ? "hidden" : "block"
        } ${
          pathname.includes(item.title.toLocaleLowerCase())
            ? "bg-gray-100"
            : "hover:bg-gray-50"
        }`}
      >
        {item.title}
      </Link>
    ));
  };

  return (
    <main className="p-5 w-full h-screen">
      <Image
        src="/LERNA.svg"
        alt="logo"
        // className="fixed top-5 sm:top-10 left-5 sm:left-10"
        width={200}
        height={200}
      />
      <div className="h-full pt-14  flex flex-col justify-between">
        <div className="flex flex-col gap-5">{renderLink()}</div>
        <button
          className={`p-2 rounded-md hover:bg-gray-50 block text-start mb-10`}
        >
          Logout
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
