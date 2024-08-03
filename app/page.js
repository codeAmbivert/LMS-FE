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
import Header from "./components/layout/Header";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [displayPassword, setDisplayPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({});
  };

  const handleSubmit = async () => {
    let newErrors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return null;

    router.push("/student/dashboard");

    try {
    } catch (error) {}
  };

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
    <>
      <Header />
      <main
        className={`${poppins.className} flex justify-center items-center min-h-screen`}
      >
        <div className="flex flex-col items-center gap-5 p-5 max-w-md w-full">
          <h2 className={`text-3xl text-lmsBlack font-extrabold`}>Log In</h2>
          <p className="text-lmsGrayText mb-5 text-center">
            Enter your credentials to access your account
          </p>
          <InputField
            name="email"
            label="EMAIL ADDRESS"
            value={formData.email}
            placeholder={"Enter email"}
            endIcon={<TbMail size={20} />}
            onChange={handleInputChange}
            error={errors?.email}
          />
          <InputField
            name="password"
            label="PASSWORD"
            value={formData.password}
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
            onChange={handleInputChange}
            error={errors?.password}
          />
          {/* <Link
            href="forgot-password"
            className="text-end w-full text-lmsPrimary text-sm font-medium"
          >
            Forgot Password?
          </Link> */}
          <Button
            // onClick={() => router.push("/student/dashboard")}
            onClick={handleSubmit}
            extraClass="mt-3 w-full"
          >
            Log into account
          </Button>
          <p className="text-lmsGrayText">
            Are you new here?{" "}
            <Link href="/sign-up" className="font-medium text-lmsPrimary">
              Create Account
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
