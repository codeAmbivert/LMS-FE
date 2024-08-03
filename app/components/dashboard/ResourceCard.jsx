import Image from "next/image";
import { Sora } from "next/font/google";
import EditResource from "./EditResourceModal";
import { useState } from "react";
import DeleteResource from "./DeleteResourceModal";

const sora = Sora({ subsets: ["latin"] });

const ResourceCard = ({ icon, name, id, updateBtns }) => {
  const [openResourceUpdate, setResourceUpdate] = useState(false);
  const [openResourceDelete, setResourceDelete] = useState(false);  

  const handle = () => {
    console.log(id);
  };
  return (
    <main className="flex gap-5 items-center p-5 shadow-lg rounded-lg">
      <div className="p-5 bg-gray-50">
        <Image src={icon || "/Loader.gif"} alt="icon" height={20} width={20} />
      </div>
      <div>
        <p className={`${sora.className}`}>{name}</p>
        {updateBtns ? (
          <div className="flex gap-5 mt-3">
            <button
              className="flex gap-1"
              onClick={() => setResourceUpdate(true)}
            >
              Edit
            </button>
            <button
              className="flex gap-1"
              onClick={() => setResourceDelete(true)}
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
      <div>
        <EditResource
          open={openResourceUpdate}
          onClose={setResourceUpdate}
          id={id}
        />
        <DeleteResource
          open={openResourceDelete}
          onClose={setResourceDelete}
          name={name}
          id={id}
        />
      </div>
    </main>
  );
};

export default ResourceCard;
