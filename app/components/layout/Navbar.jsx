"use client";
import { TiHomeOutline } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdLogOut, IoMdPaper } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";

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
  {
    title: "Past Questions",
    link: {
      student: "/student/past-questions",
    },
    tags: ["student"],
  },
  {
    title: "Saved Materials",
    link: {
      student: "/student/saved-materials",
    },
    tags: ["student"],
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [tag, setTag] = useState("student");

  const renderLink = () => {
    return links.map((item, i) => (
      <Link
        key={i}
        href={item.link?.[tag] ? item.link?.[tag] : ""}
        className={`p-2 rounded-md flex gap-3 items-center ${
          !item.tags.includes(tag) ? "hidden" : "block"
        } ${
          pathname.includes(item.link[tag])
            ? "bg-lmsPrimary text-white"
            : "hover:bg-gray-50"
        }`}
      >
        <span className="md:hidden">
          {item?.title === "Dashboard" ? (
            <TiHomeOutline size={35} />
          ) : item?.title === "Past Questions" ? (
            <IoMdPaper size={35} />
          ) : (
            <FaRegBookmark size={28} />
          )}
        </span>
        <span className="hidden md:inline">
          {item?.title === "Dashboard" ? (
            <TiHomeOutline size={20} />
          ) : item?.title === "Past Questions" ? (
            <IoMdPaper size={20} />
          ) : (
            <FaRegBookmark size={17} />
          )}
        </span>
        <span className="hidden md:inline">{item.title}</span>
      </Link>
    ));
  };

  return (
    <main className="p-5 w-full flex justify-around items-center border-t bg-white">
      {renderLink()}

      <button
        className={`p-2 rounded-md hover:bg-gray-50 text-start flex gap-2 items-center`}
      >
        <IoMdLogOut size={35} className="md:hidden" />
        <IoMdLogOut size={20} className="hidden md:inline" />
      </button>
    </main>
  );
};

export default Navbar;
