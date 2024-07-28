"use client";
import DashboardCards from "@/app/components/dashboard/DashboardCard";
import EditResource from "@/app/components/dashboard/EditResourceModal";
import ResourceCard from "@/app/components/dashboard/ResourceCard";
import ResourceUpload from "@/app/components/dashboard/ResourceUploadModal";
import Layout from "@/app/components/layout/Layout";
import { Sora } from "next/font/google";
import { useState } from "react";

const sora = Sora({ subsets: ["latin"] });

// const cardDetails = [{title}]

const LecturerDashboard = () => {
  const [openResourceUpload, setResourceUpload] = useState(false);
  const [hi, setHi] = useState("");

  return (
    <Layout>
      <div className="p-5 sm:p-10">
        <div className="flex gap-5 items-center">
          <div className="rounded-full p-8 bg-blue-500 w-fit"></div>
          <div className={`${sora.className}`}>
            <p className={`text-xl font-medium`}>Welcome Dr. Aiyeniko</p>
            <p className="text-sm mt-2">Here are the overview of your course</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row  gap-8 mt-10">
          <DashboardCards
            title="Upload Course Materials"
            icon="icon"
            iconFunc={() => setHi("upload")}
            count={
              <button className="underline" onClick={setResourceUpload}>
                Manage your uploaded materials
              </button>
            }
          />
          <DashboardCards
            title="Completed"
            icon="icon"
            iconFunc={() => setHi("completed")}
            count="50"
          />
          <DashboardCards
            title="Quiz Score"
            icon="icon"
            iconFunc={() => setHi("quiz")}
            count="50"
          />
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
      <ResourceUpload open={openResourceUpload} onClose={setResourceUpload} />
    </Layout>
  );
};

export default LecturerDashboard;
