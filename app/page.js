"use client";
import { Poppins } from "next/font/google";
import InputField from "./components/InputField";
import { TbMail } from "react-icons/tb";
import Button from "./components/Button";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [displayPassword, setDisplayPassword] = useState(false);
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-5 p-5 max-w-md w-full">
        <h2 className={`${poppins.className} text-3xl font-extrabold`}>
          Log In
        </h2>
        <p className="text-gray-500">
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
        <div className="text-end w-full">Forgot Password?</div>
        <Button bgColor="bg-blue-600" extraClass="mt-3 w-full">
          Log into account
        </Button>
        <p>
          Are you new here?{" "}
          <Link href="#" className="font-medium">
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}
