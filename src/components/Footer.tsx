import { IoMdMailUnread } from "react-icons/io";
import Logo from "../assets/PageLogo2.png";
import {
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full md:w-screen h-full py-4 md:py-10 px-4 md:px-24 ">
      {/* FOOTER ITEMS */}
      <div className="w-full flex flex-wrap gap-14 md:gap-0 items-center justify-center md:justify-between border-b-2 border-sky-600/50 pt-10 pb-16">
        {/* COMPANY LIST */}
        <ul>
          <h3 className="text-sky-600 uppercase font-semibold">Company</h3>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Cupiditate.
          </li>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Laboriosam
          </li>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Quisquam
          </li>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Officia
          </li>
        </ul>
        {/* END OF COMPANY LIST */}
        {/* PRICING LIST */}
        <ul>
          <h3 className="text-sky-600 uppercase font-semibold">Pricing</h3>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Quas
          </li>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Cupiditate
          </li>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Adipisci
          </li>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Doloribus
          </li>
        </ul>
        {/* END OF PRICING LIST */}
        {/* VISA LIST */}
        <ul>
          <h3 className="text-sky-600 uppercase font-semibold">Visa</h3>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Consectetur
          </li>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Omnis
          </li>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Laboriosam
          </li>
          <li className="text-xs md:text-sm text-sky-950/80 hover:text-sky-950 duration-100 mt-4 cursor-pointer">
            Adipisicing
          </li>
        </ul>
        {/* END OF VISA LIST */}
        {/* NEWS CONTAINER */}
        <div>
          <h3 className="text-sky-600 uppercase font-semibold">Newsletter</h3>
          <form
            className="text-sm"
            onSubmit={(e) => e.preventDefault()}
            action="submit"
          >
            <p className="mt-4 text-xs">
              Don’t miss out on important
              <br /> updates!
            </p>
            <input
              placeholder="e-mail"
              className="duration-300 outline-none border-2 shadow focus:border-sky-700 mt-4 px-1 py-1 rounded-md"
              type="email"
            />
            <motion.button
              whileTap={{ scale: 1.05 }}
              className="block text-slate-100 px-2 py-1 rounded-md border-2 border-sky-600 bg-sky-600 hover:bg-transparent transition-colors duration-300 mt-4 hover:text-sky-700 "
            >
              <div className="flex gap-2 items-center justify-center">
                <p>Notify Me</p>
                <IoMdMailUnread />
              </div>
            </motion.button>
          </form>
        </div>
        {/* END OF NEWS CONTAINER */}
        {/* FOOTER LOGO CONTAINER */}
        <div className="text-sm">
          <div className="flex items-center gap-2">
            <img
              draggable="false"
              src={Logo}
              alt="Visit-ar logo."
              className="w-14"
            />
            <p className="text-sky-900 tracking-wider">visitAR</p>
          </div>
          <p className="mt-4 text-xs text-sky-950/70">Lets get connected.</p>
          <ul className="mt-4 flex w-full items-center justify-between text-sky-700/90">
            <li>
              <FaSquareXTwitter className="size-6 duration-300 hover:scale-105 cursor-pointer" />
            </li>
            <li>
              <FaSquareInstagram className="size-6 duration-300 hover:scale-105 cursor-pointer" />
            </li>
            <li>
              <FaSquareYoutube className="size-6 duration-300 hover:scale-105 cursor-pointer" />
            </li>
          </ul>
        </div>
        {/* END OF FOOTER LOGO CONTAINER */}
      </div>
      {/* END OF FOOTER ITEMS */}
      {/* COPYRIGHT TEXT */}
      <div className="w-full flex mt-8">
        <p className="mx-auto text-xs text-sky-950/70 text-center">
          © {new Date().getFullYear()} Visit-ar. All rights reserved.
          <br /> Designed with care. Unauthorized reproduction or distribution
          is prohibited.
        </p>
      </div>
      {/* END OF COPYRIGHT TEXT */}
    </footer>
  );
};

export default Footer;
