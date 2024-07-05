"use client";
import { Poppins } from "next/font/google";
import InputField from "../components/InputField";
import { TbMail } from "react-icons/tb";
import Button from "../components/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function FogotPassword() {
  const router = useRouter();
  return (
    <main
      className={`${poppins.className} flex justify-center items-center min-h-screen`}
    >
      <div className="flex flex-col items-center gap-5 p-5 max-w-md w-full">
        <h2 className={`text-3xl font-extrabold`}>Forgot Password</h2>
        <p className="text-gray-500">
          Enter your email address to reset password
        </p>

        <InputField
          label="EMAIL ADDRESS"
          placeholder={"Enter email"}
          endIcon={<TbMail size={20} />}
        />

        <Button
          onClick={() => router.push("/forgot-password/verify")}
          bgColor="bg-blue-600"
          extraClass="mt-3 w-full"
        >
          Submit
        </Button>

        <Link href="/sign-up" className="font-medium">
          Back To Login
        </Link>
      </div>
    </main>
  );
}
