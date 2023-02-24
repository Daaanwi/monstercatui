import Image from "next/image";
import Logo from "/public/assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="w-screen">
      <div className="absolute w-full h-20 z-10">
        <div className="mx-12 my-4 h-full flex justify-between items-center">
          <Image src={Logo} height={60} width={60} alt="logo" />
          <AiOutlineMenu size={30} />
        </div>
      </div>
    </div>
  );
}
