import {
  AiOutlinePlayCircle,
  AiFillApple,
  AiFillYoutube,
} from "react-icons/ai";
import { FaSpotify, FaSoundcloud } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full bg-[#171514] py-4 shadow-xl">
      <div className="max-w-[1600px] mx-auto py-4">
        <div className="w-full my-4">
          <p className="uppercase text-5xl font-bold tracking-widest">
            Stream it your way
          </p>
        </div>
        <div className="w-full my-6">
          <div className="flex flex-row">
            <div className="p-4 border flex flex-row items-center">
              <AiOutlinePlayCircle size={25} /> {"Player"}
            </div>
            <div className="p-4 border flex items-center">
              <AiFillApple size={25} />
            </div>
            <div className="p-4 border flex items-center">
              <FaSpotify size={25} />
            </div>
            <div className="p-4 border flex items-center">
              <AiFillYoutube size={25} />
            </div>
            <div className="p-4 border flex items-center">
              <FaSoundcloud size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
