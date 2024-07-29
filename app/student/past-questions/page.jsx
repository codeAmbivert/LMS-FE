"use client";
import ResourceCard from "@/app/components/dashboard/ResourceCard";
import Layout from "@/app/components/layout/Layout";
import Loader from "@/app/components/Loader";
import { useEffect, useState } from "react";
import { Sora } from "next/font/google";
import DashboardCards from "@/app/components/dashboard/DashboardCard";
import { BiPlusCircle } from "react-icons/bi";
import Header from "@/app/components/layout/Header";

const sora = Sora({ subsets: ["latin"] });

const PastQuestions = () => {
  const [loading, setLoading] = useState(true);
  const [semester, setSemester] = useState("by me");
  console.log(semester);

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
      <div className="lg:hidden">
        <Header backNav={true} />
      </div>
      <Layout>
        <div className="max-h-screen overflow-y-scroll">
          <div className="p-5 sm:p-10 lg:mt-0 my-20">
            <div className="flex justify-between items-center gap-10 flex-wrap">
              <div className="flex gap-5 items-center">
                <div className="rounded-full p-8 bg-blue-500 w-fit"></div>
                <div className={`${sora.className}`}>
                  <p className={`text-xl font-medium`}>Welcome Joe Doe</p>
                  <p className="text-sm mt-2">
                    Here are the overview of your courses
                  </p>
                </div>
              </div>

              <button
                className="flex max-w-md text-start"
                onClick={() => setResourceUpload(true)}
              >
                <DashboardCards
                  title="Upload Past Questions"
                  icon={<BiPlusCircle size={35} />}
                  count={<span>Total uploaded: 50</span>}
                />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-2xl mt-10">Past Questions</p>
              <div>
                {/* <p className={`${sora.className} text-2xl mt-5`}>All</p> */}
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <button
                className={`border-b-2 ${
                  semester === "by me"
                    ? "border-lmsPrimary"
                    : "border-transparent"
                }`}
                onClick={() => setSemester("by me")}
              >
                Uploaded By Me
              </button>
              <button
                className={`border-b-2 ${
                  semester === "first"
                    ? "border-lmsPrimary"
                    : "border-transparent"
                }`}
                onClick={() => setSemester("first")}
              >
                Harmattan Semester(1st)
              </button>
              <button
                className={`border-b-2 ${
                  semester === "second"
                    ? "border-lmsPrimary"
                    : "border-transparent"
                }`}
                onClick={() => setSemester("second")}
              >
                Rain Semester(2nd)
              </button>
            </div>

            {semester === "by me" && (
              <div className="mt-5">
                Uploaded by me
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
              </div>
            )}
            {semester === "first" && (
              <div className="mt-5">
                First
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
              </div>
            )}

            {semester === "second" && (
              <div className="mt-5">
                Second
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
              </div>
            )}
          </div>
        </div>
        {/* <ResourceUpload open={openResourceUpload} onClose={setResourceUpload} /> */}
      </Layout>
    </>
  );
};

export default PastQuestions;
