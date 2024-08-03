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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    user: "",
  });
  console.log(formData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({});
  };

  const handleSubmit = async () => {
    let newErrors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (formData.password !== confirmPassword || formData.password.length < 1) {
      newErrors.confirmPassword = "Password not the same";
    }

    if (!formData.user) {
      newErrors.user = "Please select a user";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return null;

    try {
    } catch (error) {}
  };

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
            name="fullName"
            value={formData.fullName}
            label="FULL NAME"
            placeholder={"Enter full name"}
            endIcon={<FaRegUser size={20} />}
            onChange={handleInputChange}
            error={errors?.fullName}
          />
          <InputField
            name="email"
            value={formData.email}
            label="EMAIL"
            placeholder={"Enter email"}
            endIcon={<TbMail size={20} />}
            onChange={handleInputChange}
            error={errors?.email}
          />
          <InputField
            name="password"
            value={formData.password}
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
            onChange={handleInputChange}
            error={errors?.password}
          />
          <InputField
            label="CONFIRM PASSWORD"
            value={confirmPassword}
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
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors({});
            }}
            error={errors?.confirmPassword}
          />
          <div className="w-full">
            <p>User</p>
            <select
              className="w-full focus:outline-none border rounded-lg p-3"
              onChange={(e) => {
                setFormData({ ...formData, user: e.target.value });
                setErrors({});
              }}
            >
              <option value="">Select</option>
              <option value="lecturer">Lecturer</option>
              <option value="student">Student</option>
            </select>
            {errors?.user && (
              <p className="text-red-700 text-xs mt-1">{errors?.user}</p>
            )}
          </div>
          <Button
            // onClick={() => router.push("/sign-up/verify")}
            onClick={handleSubmit}
            extraClass="mt-3 w-full"
          >
            Proceed
          </Button>
          <p>
            Already have an account?{" "}
            <Link href="/" className="text-lg font-semibold text-lmsPrimary">
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
