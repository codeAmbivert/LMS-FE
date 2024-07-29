"use client";
import { Poppins } from "next/font/google";
import InputField from "../components/InputField";
import { TbMail } from "react-icons/tb";
import Button from "../components/Button";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/layout/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function SignUp() {
  const router = useRouter();
  const [displayPassword, setDisplayPassword] = useState(false);
  return (
    <>
      <Header />
      <main
        className={`${poppins.className} flex justify-center items-center min-h-screen mt-16`}
      >
        <div className="flex flex-col items-center gap-5 p-5 max-w-md w-full">
          <h2 className={`text-3xl font-extrabold text-center`}>
            Create Your Account
          </h2>
          <p className="text-gray-500">Let&apos;s Get Started</p>
          <InputField
            label="FULL NAME"
            placeholder={"Enter full name"}
            endIcon={<FaRegUser size={20} />}
          />
          <InputField
            label="EMAIL"
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
          <InputField
            label="CONFIRM PASSWORD"
            placeholder={"Confirm password"}
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
          <div className="w-full">
            <p>User</p>
            <select className="w-full focus:outline-none border rounded-lg p-3">
              <option value="lecturer">Lecturer</option>
              <option value="student">Student</option>
            </select>
          </div>
          <Button
            onClick={() => router.push("/sign-up/verify")}
            bgColor="bg-blue-600"
            extraClass="mt-3 w-full"
          >
            Proceed
          </Button>
          <p>
            Already have an account?{" "}
            <Link href="/" className="font-medium">
              Log in
            </Link>
          </p>
          {/* <p className="text-center">
            By clicking proceed you accept our <br />{" "}
            <Link href="#">Terms and Conditions</Link>
          </p> */}
        </div>
      </main>
    </>
  );
}
