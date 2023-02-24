import { BsShare } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";

export default function Track(props) {
  return (
    <div className="w-full py-4">
      <div className="md:grid grid-cols-12">
        <div className="col-span-1 mx-2 flex flex-row justify-around items-center">
          <p className="text-xl">{props.nbr}</p>
          <CiPlay1 size={20} />
        </div>
        <div className="col-span-10 mx-2 items-center">
          <p className="text-xl capitalize">{props.title}</p>
          <p className="text-md capitalize">{props.artist}</p>
        </div>
        <div className="col-span-1 mx-2 flex flex-row justify-around items-center">
          <p className="text-xl">{props.duration}</p>
          <BsShare size={20} />
        </div>
      </div>
    </div>
  );
}
