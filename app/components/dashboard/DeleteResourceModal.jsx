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
        <p className="text-center">Are you sure you want to delete {name}</p>
      </div>
    </main>
  );
};

export default DeleteResource;
