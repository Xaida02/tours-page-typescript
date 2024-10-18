import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { provinces } from "../shared/provinces";
import PageLogo from "../assets/PageLogo2.png";
import { FaBars, FaHome } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { FaCircleExclamation, FaLocationDot } from "react-icons/fa6";

const NavBar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");
  const [isTopOfThePage, setIsTopOfThePage] = useState<boolean>(true);
  const { province } = useParams();

  // HANDLING NAV-SCROLL LOGIC

  const currentPage = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage === "/" || currentPage === "/about") {
        setIsTopOfThePage(window.scrollY === 0);
      } else {
        setIsTopOfThePage(false);
      }
    };

    if (currentPage !== "/" && currentPage !== "/about") {
      setIsTopOfThePage(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const MotionLink = motion.create(Link);

  useEffect(() => {
    setSelectedPage(currentPage);
  }, [currentPage]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`duration-300 fixed top-0 w-screen md:w-full md:gap-0 gap-2 pb-4 md:pb-0 px-6 flex flex-col md:flex-row items-center justify-between z-30 text-sm md:text-base ${
          !isTopOfThePage
            ? "bg-slate-100 shadow text-sky-950"
            : "text-slate-100"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center w-full md:w-auto justify-between md:justify-center gap-2">
          <Link to={"/"} className="text-sky-600 text-lg">
            <img
              draggable="false"
              className="object-cover p-1 top-0 left-0 w-[60px] contrast-150 opacity-90"
              src={PageLogo}
              alt="Page Logo"
            />
          </Link>
          <p className="tracking-wider hidden md:block">visitAR</p>
          <button
            className="flex items-center justify-center md:hidden px-6 py-4"
            onClick={() => setIsSidebarVisible(true)}
          >
            <FaLocationDot
              className={`size-4 mr-4 ${
                isTopOfThePage ? "text-slate-100" : "text-sky-950/60"
              }`}
            />
            <FaBars
              className={`size-4  ${
                isTopOfThePage ? "text-slate-100" : "text-sky-950"
              }`}
            />
          </button>
        </div>
        {/* END OF LOGO */}
        {/* INFO PAGES LINKS */}
        <div
          className={`flex md:w-auto items-center justify-between md:justify-center md:gap-2 text-sm`}
        >
          <Link
            className={`px-4 py-2 rounded-lg duration-300 group relative flex items-center justify-center gap-2 ${
              selectedPage === "/"
                ? "bg-sky-600 text-slate-100"
                : "hover:bg-sky-600"
            }`}
            to="/"
          >
            <p className="group-hover:text-slate-100 duration-100">Home</p>
            <FaHome className="size-4 group-hover:text-slate-100 duration-100" />
          </Link>

          <Link
            className={`px-4 py-2 rounded-lg duration-300 group relative flex items-center justify-center gap-2 ${
              selectedPage === "/contact"
                ? "bg-sky-600 text-slate-100"
                : "hover:bg-sky-600"
            }`}
            to="/contact"
          >
            <p className="group-hover:text-slate-100 duration-100">Contact</p>
            <MdContactSupport className="size-4 group-hover:text-slate-100 duration-100" />
          </Link>
          <Link
            className={`px-4 py-2 rounded-lg duration-300 group relative flex items-center justify-center gap-2 ${
              selectedPage === "/about"
                ? "bg-sky-600 text-slate-100"
                : "hover:bg-sky-600"
            }`}
            to="/about"
          >
            <p className="group-hover:text-slate-100 duration-100">About</p>
            <FaCircleExclamation className="size-4 group-hover:text-slate-100 duration-100" />
          </Link>
        </div>
        {/* END OF INFO PAGES LINKS */}
        {/* PROVINCES SIDEBAR */}
        <div className="hidden md:flex items-center justify-center h-full gap-2">
          <p className="text-sm">Provinces</p>
          <button
            className="rounded-lg p-2 duration-300 group hover:bg-sky-600"
            key={`${isSidebarVisible}`}
            onClick={() => setIsSidebarVisible(true)}
          >
            <FaBars className="size-4 group-hover:text-slate-100 duration-100" />
          </button>
        </div>
        {/* SIDEBAR */}
        <AnimatePresence>
          {isSidebarVisible && (
            <motion.div
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, duration: 0.3 }}
              className="fixed top-0 right-0 text-gray-800 bg-slate-100 px-6 py-4 z-0 shadow-xl rounded"
            >
              <button
                onClick={() => setIsSidebarVisible(false)}
                className="absolute text-red-800 p-1 right-2 top-1 z-10 duration-300 hover:scale-150"
              >
                <IoMdClose className="size-4" />
              </button>
              <u className="relative flex w-[150px] flex-col no-underline text-sm text-sky-900">
                {provinces.map((item, index) => (
                  <MotionLink
                    initial={{
                      opacity: 0,
                      y: item.title !== province ? 5 : 0,
                      x: item.title !== province ? 50 : 0,
                    }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: item.title !== province ? 0.1 * index : 0,
                    }}
                    key={index}
                    to={`/${item.title}`}
                    className={`cursor-pointer p-2 ${
                      item.title === province && "font-semibold text-base my-1"
                    }`}
                  >
                    <li className="list-none duration-200 hover:text-sky-950 hover:scale-105 hover:translate-x-[-5px]">
                      {item.name}
                    </li>
                  </MotionLink>
                ))}
              </u>
            </motion.div>
          )}
        </AnimatePresence>
        {/* END PROVINCES SIDEBAR */}
      </motion.nav>
      {/* PAGE CONTENT (IGNORE) */}
      <Outlet />
      {/* END OF PAGE CONTENT */}
    </>
  );
};

export default NavBar;
