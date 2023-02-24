import Image from "next/image";
import Background from "/public/assets/lightpainting.jpg";
import Cover from "/public/assets/cover.jpg";
import { FiPlay } from "react-icons/fi";
import { GiShare } from "react-icons/gi";
import Button from "./Button";
import SocialBar from "./SocialBar";

export default function Main() {
  return (
    <div className="w-full h-screen shadow-xl">
      <Image
        className="blur-[2px]"
        src={Background}
        alt="background"
        layout="fill"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex items-center w-full mx-auto py-4 max-w-[1600px]">
          <div className="w-1/2 pr-8">
            <Image
              className="w-[90%] shadow-lg mt-40"
              src={Cover}
              alt="cover"
            />
          </div>
          <div className="w-1/2 font-bold uppercase mt-24">
            <h1 className="text-5xl mb-2 text-[#fdfdfd] tracking-widest">
              Level days
            </h1>
            <p className="text-[#fdfdfd] text-4xl">CONRO</p>
            <div className="mt-12 flex flex-row">
              <Button icon={FiPlay} fill={true} title="Listen now" />
              <Button icon={GiShare} fill={false} title="Share" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 mt-20 mx-12">
        <SocialBar />
      </div>
    </div>
  );
}
