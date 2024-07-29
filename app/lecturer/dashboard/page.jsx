"use client";
import DashboardCards from "@/app/components/dashboard/DashboardCard";
import EditResource from "@/app/components/dashboard/EditResourceModal";
import ResourceCard from "@/app/components/dashboard/ResourceCard";
import ResourceUpload from "@/app/components/dashboard/ResourceUploadModal";
import Header from "@/app/components/layout/Header";
import Layout from "@/app/components/layout/Layout";
import Loader from "@/app/components/Loader";
import { Sora } from "next/font/google";
import { useEffect, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";

const sora = Sora({ subsets: ["latin"] });

// const cardDetails = [{title}]

const LecturerDashboard = () => {
  const [openResourceUpload, setResourceUpload] = useState(false);
  const [loading, setLoading] = useState(true);

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
                  <p className={`text-xl font-medium`}>Welcome Dr. Aiyeniko</p>
                  <p className="text-sm mt-2">
                    Here are the overview of your courses
                  </p>
                </div>
              </div>

              <div
                className="flex max-w-md"
                onClick={() => setResourceUpload(true)}
              >
                <DashboardCards
                  title="Upload Course Materials"
                  icon={<BiPlusCircle size={35} />}
                  count={<span>Total: 50</span>}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-2xl mt-5">Available Resources</p>
              <div>
                <p className={`${sora.className} text-2xl mt-5`}>All</p>
              </div>
            </div>
            <div className="mt-5">
              <ResourceCard name="CSC 405  SOFTWARE ENGINEERING (3 UNITS) - C" />
            </div>
          </div>
        </div>
        <ResourceUpload open={openResourceUpload} onClose={setResourceUpload} />
      </Layout>
    </>
  );
};

export default LecturerDashboard;
