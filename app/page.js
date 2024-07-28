"use client";
import { Poppins } from "next/font/google";
import InputField from "./components/InputField";
import { TbMail } from "react-icons/tb";
import Button from "./components/Button";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [displayPassword, setDisplayPassword] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main
      className={`${poppins.className} flex justify-center items-center min-h-screen`}
    >
      <Image
        src="/LERNA.svg"
        alt="logo"
        className="fixed top-5 sm:top-10 left-5 sm:left-10"
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center gap-5 p-5 max-w-md w-full">
        <h2 className={`text-3xl text-lmsBlack font-extrabold`}>Log In</h2>
        <p className="text-lmsGrayText mb-5">
          Enter your credentials to access your account
        </p>
        <InputField
          label="EMAIL ADDRESS"
          placeholder={"Enter email"}
          endIcon={<TbMail size={20} />}
        />
        <InputField
          label="PASSWORD"
          placeholder={"Enter password"}
          type={displayPassword ? "text" : "password"}
          endIcon={
            <button onClick={() => setDisplayPassword(!displayPassword)}>
              {displayPassword ? (
                <FaRegEyeSlash size={20} />
              ) : (
                <FaRegEye size={20} />
              )}
            </button>
          }
        />
        <Link
          href="forgot-password"
          className="text-end w-full text-lmsPrimary text-sm font-medium"
        >
          Forgot Password?
        </Link>
        <Button extraClass="mt-3 w-full">Log into account</Button>
        <p className="text-lmsGrayText">
          Are you new here?{" "}
          <Link href="/sign-up" className="font-medium text-lmsPrimary">
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}
