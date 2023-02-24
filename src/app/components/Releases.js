import Release from "./Release";
import Cover1 from "/public/assets/covers/mamunurpics.jpg";
import Cover2 from "/public/assets/covers/maldives.jpg";
import Cover3 from "/public/assets/covers/conchillos.jpg";
import Cover4 from "/public/assets/covers/lukas.jpg";
import Cover5 from "/public/assets/covers/rossi.jpg";
import Cover6 from "/public/assets/covers/pixabay.jpg";

export default function Releases() {
  const releases = [
    { cover: Cover1, title: "Feeling", artist: "Conro" },
    { cover: Cover2, title: "Find u.", artist: "Conro" },
    {
      cover: Cover3,
      title: "Falling for you",
      artist: "Sabai, With Love & Nevve",
    },
    { cover: Cover4, title: "Memory bank", artist: "Dyro z Conro" },
    { cover: Cover5, title: "Luv", artist: "Conro" },
    { cover: Cover6, title: "You gotta be", artist: "Conro & LissA" },
  ];

  return (
    <div className="w-full bg-[#171514] py-6">
      <div className="max-w-[1600px] mx-auto my-4">
        <p className="text-5xl uppercase tracking-widest font-bold">
          Other releases like this
        </p>
        <div className="flex flex-row justify-between mt-8">
          {releases.map((release) => (
            <Release
              cover={release.cover}
              title={release.title}
              artist={release.artist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
