export default function Button({ icon: IconComponent, fill, title }) {
  return (
    <button
      className={`px-8 py-3 mx-1 ${
        fill
          ? "bg-[#50a485] hover:bg-[#fdfdfd] hover:text-black"
          : "border hover:bg-[#fafafa] hover:text-black"
      }`}
    >
      <p className="uppercase tracking-wide font-xl flex flex-row h-full items-center">
        {<IconComponent size={20} />}{' '}
        {title}
      </p>
    </button>
  );
}
