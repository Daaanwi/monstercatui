import Track from "./Track";

export default function TracklistSection() {
  const tracks = [
    { title: "the small things", artist: "conro", duration: 3.35 },
    { title: "without your love", artist: "conro", duration: 3.09 },
    { title: "therapy", artist: "conro", duration: 3.06 },
    { title: "fighters", artist: "conro", duration: 3.46 },
    { title: "way up", artist: "conro", duration: 3.32 },
    { title: "waiting", artist: "conro", duration: 3.07 },
    { title: "dreaming", artist: "conro", duration: 2.57 },
    { title: "tattoo", artist: "conro", duration: 3.29 },
    { title: "out for the night", artist: "conro", duration: 3.05 },
    { title: "overdue", artist: "conro", duration: 2.48 },
    { title: "say it", artist: "conro", duration: 3.04 },
    { title: "here to stay", artist: "conro", duration: 2.44 },
  ];

  return (
    <div className="w-full bg-[#171514] shadow-xl">
      <div className="max-w-[1600px] mx-auto py-2">
        <div className="py-4">
          <p className="uppercase text-4xl font-bold tracking-wide">
            Track list
          </p>
        </div>
        {/* Låtar */}
        {tracks.map((track, index) => (
          <Track
            nbr={index + 1}
            title={track.title}
            artist={track.artist}
            duration={track.duration}
          />
        ))}
      </div>
    </div>
  );
}
