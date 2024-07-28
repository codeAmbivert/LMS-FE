import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black bg-opacity-5">
      <Image src="/Loader.gif" alt="logo" height={50} width={50} />
    </div>
  );
};

export default Loader;
