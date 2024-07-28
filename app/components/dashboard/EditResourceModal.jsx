import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import { LuPaperclip } from "react-icons/lu";
import { FiTrash } from "react-icons/fi";

const EditResource = ({ open, onClose, id }) => {
  const [fileError, setFileError] = useState("");
  const [formData, setFormData] = useState({
    courseTitle: "",
    courseCode: "",
    videoLink: "",
    file: null,
  });

  const reset = () => {
    setFormData({
      courseTitle: "",
      courseCode: "",
      videoLink: "",
      file: null,
    });
  };

  const handleClose = () => {
    reset();
    onClose(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileInputChange = (e) => {
    setFileError("");
    const files = Array.from(e.target.files);
    if (e.target.files.length > 0) {
      const fileExtension = files[0].name.split(".").pop().toLowerCase();

      const allowedExtensions = ["jpg", "jpeg", "png", "pdf"];
      if (!allowedExtensions.includes(fileExtension)) {
        setFileError(
          "Invalid file type. Please select an image (.jpg, .jpeg, .png). or a pdf file"
        );
        return;
      }
      setFormData((prev) => ({ ...prev, file: files[0] }));
    }
  };
  const handleFileDrop = (e) => {
    e.preventDefault();
    console.log(e);
    const files = Array.from(e.dataTransfer.files);
    if (files.length <= 1) {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFileError("You can only upload a maximum of 1 file.");
    }
  };

  const handleFileDelete = () => {
    setFormData((prev) => ({ ...prev, file: null }));
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
        <InputField
          name="courseTitle"
          label="course title"
          placeholder="Add title"
          value={formData.courseTitle}
          onChange={handleInputChange}
        />
        <InputField
          name="courseCode"
          label="course code"
          placeholder="CSC 203"
          value={formData.courseCode}
          onChange={handleInputChange}
        />
        <InputField
          name="videoLink"
          label="Video Link"
          placeholder="Add video link (optional)"
          value={formData.videoLink}
          onChange={handleInputChange}
        />

        <div
          className="text-center w-full"
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="w-full border-dotted border-[5px] rounded-3xl bg-pharmaGray pt-4 pb-4 text-swBlack">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              // accept=".csv"
              onChange={handleFileInputChange}
            />

            <p className="text-lg font-medium">
              Drag and drop a file to upload
            </p>
            <p className="textxs">File types: image, pdf</p>
            <p className="textxs">Max file size: 3mb</p>

            <label
              htmlFor="fileInput"
              className="cursor-pointer flex gap-2 items-center p-2 rounded-md bg-swBlue font-medium w-fit mx-auto mt-5 border"
            >
              <LuPaperclip size={20} />{" "}
              {formData.file ? "Change file" : "Upload file"}
            </label>
          </div>
          {formData.file && (
            <div className="mt-2 bg-white flex rounded-md border">
              <div className="flex gap-3 items-center p-2 pl-2 font-medium ">
                {/* <FiFileText size={20} /> */}
                {formData.file.name}
              </div>
              <div
                className="flex gap-4 items-center ml-auto p-2 border-l cursor-pointer"
                onClick={handleFileDelete}
              >
                <FiTrash className="text-lmsWarning" size={15} />
              </div>
            </div>
          )}
        </div>

        <Button disabled={true}>Update Material</Button>
        <button
          className="text-sm font-medium text-lmsBlack uppercase text-center"
          onClick={handleClose}
        >
          cancel
        </button>
      </div>
    </main>
  );
};

export default EditResource;
