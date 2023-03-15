import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillYoutube,
  AiFillApple,
} from "react-icons/ai";
import { FaTiktok, FaTwitch, FaDiscord, FaSpotify } from "react-icons/fa";
import { SiTriller } from "react-icons/si";

export default function Footer() {
  const socials = [
    { icon: AiFillYoutube },
    { icon: AiOutlineInstagram },
    { icon: FaTiktok },
    { icon: AiOutlineTwitter },
    { icon: FaSpotify },
    { icon: AiFillApple },
    { icon: FaTwitch },
    { icon: AiFillFacebook },
    { icon: FaDiscord },
    { icon: SiTriller },
  ];

  return (
    <div className="w-full bg-[#171514] py-4 text-[#fdfdfd]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-row justify-between">
          <p className="italic text-[#ccc] text-lg">
            2021 © Monstercat, All Rights Reserved
          </p>
          <div className="flex flex-row">
            {socials.map((icon, index) => {
              const Icon = icon.icon;
              return <Icon key={`key-${index}`} size={25} className="mx-2" />;
            })}
          </div>
        </div>
        <div className="w-[55%] mx-auto my-8 text-center">
          <p>
            We acknowledge with gratitude the traditional, ancestral and unceded
            land of the Coast Salish peoples, including the territories of the
            Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
            (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
            Monstercat's Vancouver HQ stands.
          </p>
          <p className="mt-4">
            We acknowledge the unceded and ancestral territories of the
            Gabrielino/Tongva peoples on which our LA team live and work.
          </p>
        </div>
      </div>
    </div>
  );
}
