import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { FaTiktok, FaTwitch, FaDiscord } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="flex flex-col items-end py-4">
      <AiOutlineInstagram size={25} className="my-2" />
      <FaTiktok size={25} className="my-2" />
      <AiOutlineTwitter size={25} className="my-2" />
      <FaTwitch size={25} className="my-2" />
      <AiFillFacebook size={25} className="my-2" />
      <FaDiscord size={25} className="my-2" />
    </div>
  );
}
