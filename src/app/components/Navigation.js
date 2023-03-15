import { BsArrowRight } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className="w-full py-8 bg-[#171514] text-[#fdfdfd]">
      <div className="max-w-[1600px] mx-auto py-8 border-t border-b">
        <div className="md:grid grid-cols-12 flex flex-row">
          <div className="col-span-4">
            <ul className="text-lg font-semibold uppercase">
              <li>About Monstercat</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>News</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="col-span-4">
            <ul className="text-lg font-semibold uppercase">
              <li>Terms of service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-span-4">
            <ul className="w-[60%]">
              <li className="text-lg font-semibold text-[#ccc] uppercase">
                MonstercAt News
              </li>
              <li className="text-md italic">
                Don't miss a thing, stay up to date with the latest news from
                us.
              </li>
            </ul>
            <div className="flex flex-row items-center relative mt-8">
              <input
                type="email"
                placeholder="Enter Email"
                maxLength={40}
                className="no-outline border-b border-[#ccc] w-full bg-transparent py-2 mt-2 focus:outline-none"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button type="submit">
                  <BsArrowRight size={20} />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
