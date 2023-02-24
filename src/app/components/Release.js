import Image from "next/image";

export default function Release(props) {
  return (
    <div className="flex flex-col">
      <div className="relative h-[250px] w-[250px]">
        <Image
          src={props.cover}
          size={250}
          layout="fill"
          objectFit="cover"
          className="my-2 object-cover"
          alt="cover-image"
        />
      </div>
      <div className="my-4">
        <p className="uppercase font-bold tracking-wide text-xl">
          {props.title}
        </p>
        <p className="capitalize text-[#ccc] font-thin">{props.artist}</p>
      </div>
    </div>
  );
}
