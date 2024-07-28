import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../Button";

const DeleteResource = ({ open, name, id, onClose }) => {
  const handleClose = () => {
    onClose(false);
  };

  if (!open) return null;
  return (
    <main
      className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-25 flex justify-center items-center p-5"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-md p-5 max-w-md w-full flex flex-col gap-5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium">Delete Resource</p>
          <IoMdCloseCircleOutline
            size={30}
            className="cursor-pointer text-red-500"
            onClick={handleClose}
          />
        </div>
        <p className="text-center">
          Are you sure you want to delete{" "}
          <span className="font-medium">{name}</span>?
        </p>

        <div className="flex gap-5">
          <Button bgColor="border bg-white w-full" textColor="text-lmsBlack">
            No
          </Button>
          <Button bgColor="bg-lmsWarning w-full">Yes</Button>
        </div>
      </div>
    </main>
  );
};

export default DeleteResource;
