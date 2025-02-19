"use client";
import Image from "next/image";
import { TiHomeOutline } from "react-icons/ti";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdLogOut, IoMdPaper } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";

const links = [
  {
    title: "Dashboard",
    // icon: `<TiHomeOutline size={20/>`,
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

const Sidebar = () => {
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
        <span>
          {item?.title === "Dashboard" ? (
            <TiHomeOutline size={20} />
          ) : item?.title === "Past Questions" ? (
            <IoMdPaper size={20} />
          ) : (
            <FaRegBookmark size={17} />
          )}
        </span>
        <span>{item.title}</span>
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
          className={`p-2 rounded-md hover:bg-gray-50 text-start mb-10 flex gap-2 items-center`}
        >
          Logout
          <IoMdLogOut size={20} />
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
