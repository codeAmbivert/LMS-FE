import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

const Header = ({ backNav }) => {
  const router = useRouter();

  return (
    <nav className="p-5 sm:p-10 flex gap-5 items-center fixed top-0 left-0 w-full bg-white z-50">
      {backNav ? (
        <IoArrowBackOutline
          size={25}
          className="cursor-pointer"
          onClick={() => router.back()}
        />
      ) : null}

      <Image
        src="/LERNA.svg"
        alt="logo"
        // className="fixed top-5 sm:top-10 left-5 sm:left-10"
        width={120}
        height={120}
      />
    </nav>
  );
};

export default Header;
