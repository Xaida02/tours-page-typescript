import { useState } from "react";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";

const Contact = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);

  return (
    <section className="w-full min-h-screen flex flex-col mt-20 text-sky-950 bg-slate-100">
      {/* CONTACT FORM */}
      <div className="m-auto md:min-h-[75vh] flex flex-col items-center justify-center px-8 pt-24 md:px-0 md:pt-0">
        <h1 className="text-2xl md:text-4xl font-bold text-sky-700">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl mt-4 font-medium">
          Any questions or remarks? Just write us a message!
        </p>
        <form
          className="w-full"
          action="submit"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-8 md:gap-4 justify-between w-full mt-10">
            <div className="grow relative flex items-center justify-start">
              <label
                className={`absolute duration-300 text-sm px-2 ${
                  isEmailFocused
                    ? "translate-y-[-170%] text-sky-950"
                    : "text-sky-950/50"
                }`}
              >
                Email
              </label>
              <input
                onFocus={() => setIsEmailFocused(true)}
                onBlur={(e) => setIsEmailFocused(e.target.value !== "")}
                className="w-full px-3 py-2 rounded-lg shadow-lg md:shadow outline-none ring-2 ring-slate-200 text-sm"
                type="email"
              />
            </div>
            <div className="grow relative flex items-center justify-start">
              <label
                className={`absolute duration-300 text-sm px-2 ${
                  isNameFocused
                    ? "translate-y-[-170%] text-sky-950"
                    : "text-sky-950/50"
                }`}
              >
                Name
              </label>
              <input
                onFocus={() => setIsNameFocused(true)}
                onBlur={(e) => setIsNameFocused(e.target.value !== "")}
                className="w-full px-3 py-2 rounded-lg shadow-lg md:shadow outline-none ring-2 ring-slate-200 text-sm"
                type="text"
              />
            </div>
          </div>
          <textarea
            name="message"
            className="w-full resize-none my-8 md:my-4 px-3 py-2 rounded-lg shadow-sm outline-none text-sm ring-2 ring-slate-200/70"
          />
          <button
            type="submit"
            className="w-full p-2 rounded-lg bg-sky-700 text-slate-100 mt-4 duration-300 hover:text-sky-700 hover:bg-slate-100 border-2 border-sky-700"
          >
            SUBMIT
          </button>
        </form>
      </div>
      {/* END OF CONTACT FORM */}
      {/* CONTACT PAGE FOOTER */}
      <footer className="w-full md:w-screen h-full mt-8 md:mt-2 py-4 px-4 bg-slate-200">
        {/* FOOTER ITEMS */}
        <div className="w-full flex flex-wrap gap-14 md:gap-0 items-center justify-center md:justify-around py-10">
          {/* PHONE */}
          <ul>
            <h3 className="text-sky-700 text-2xl md:text-4xl uppercase font-semibold flex gap-4 items-center justify-center">
              <p>PHONE</p>
              <FaPhoneFlip className="size-6" />
            </h3>
            <div className="flex gap-4">
              <li className="text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer text-lg md:text-xl">
                · + 912 3 567 8987
              </li>
              <li className="text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer text-lg md:text-xl">
                + 1 202-238-6400 ·
              </li>
            </div>
          </ul>
          {/* END OF PHONE */}
          {/* LOCATION */}
          <ul>
            <h3 className="text-sky-700 text-2xl md:text-4xl uppercase font-semibold flex gap-4 items-center justify-center">
              <p>LOCATION</p>
              <FaLocationDot className="size-6" />
            </h3>
            <li className="text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer text-lg md:text-xl">
              · 1600 New Hampshire Ave NW ·
            </li>
          </ul>
          {/* END OF LOCATION */}
        </div>
        {/* END OF FOOTER ITEMS */}
      </footer>
      {/* END OF CONTACT PAGE FOOTER */}
    </section>
  );
};

export default Contact;
