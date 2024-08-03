"use client";
import ResourceCard from "@/app/components/dashboard/ResourceCard";
import Layout from "@/app/components/layout/Layout";
import Loader from "@/app/components/Loader";
import { useEffect, useState } from "react";
import { Sora } from "next/font/google";
import Header from "@/app/components/layout/Header";

const sora = Sora({ subsets: ["latin"] });

const StudentDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [semester, setSemester] = useState("first");
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

              {/* <div
          className="flex max-w-md"
          onClick={() => setResourceUpload(true)}
          >
          <DashboardCards
            title="Upload Course Materials"
            icon={<BiPlusCircle size={35} />}
            count={<span>Total: 50</span>}
          />
          </div> */}
            </div>

            <div className="flex justify-between items-center">
              <p className="text-2xl mt-10">Available Resources</p>
              <div>
                {/* <p className={`${sora.className} text-2xl mt-5`}>All</p> */}
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <button
                className={`text-sm sm:text-base border-b-2 ${
                  semester === "first"
                    ? "border-lmsPrimary"
                    : "border-transparent"
                }`}
                onClick={() => setSemester("first")}
              >
                Harmattan Semester(1st)
              </button>
              <button
                className={`text-sm sm:text-base border-b-2 ${
                  semester === "second"
                    ? "border-lmsPrimary"
                    : "border-transparent"
                }`}
                onClick={() => setSemester("second")}
              >
                Rain Semester(2nd)
              </button>
            </div>

            {semester === "first" && (
              <div className="mt-5">
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
              </div>
            )}

            {semester === "second" && (
              <div className="mt-5">
                <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
              </div>
            )}
          </div>
          {/* <ResourceUpload open={openResourceUpload} onClose={setResourceUpload} /> */}
        </div>
      </Layout>
    </>
  );
};

export default StudentDashboard;
