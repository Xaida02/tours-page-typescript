import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { provinces } from "../shared/provinces";
import { Link } from "react-router-dom";
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Carousel = () => {
  const [targetIndex, setTargetIndex] = useState(0);
  const [autoSlideActive, setAutoSlideActive] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const MotionLink = motion.create(Link);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > 50) {
        handleSlide("right");
      } else if (distance < -50) {
        handleSlide("left");
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleSlide = (direction: "left" | "right") => {
    if (direction === "left") {
      const newIndex =
        targetIndex - 1 < 0 ? provinces.length - 1 : targetIndex - 1;
      setTargetIndex(newIndex);
    }
    if (direction === "right") {
      const newIndex =
        targetIndex + 1 >= provinces.length ? 0 : targetIndex + 1;
      setTargetIndex(newIndex);
    }
  };

  const handleAutoSlideToggle = () => {
    if (!autoSlideActive) {
      setAutoSlideActive(true);
      handleSlide("right");
    }
    if (autoSlideActive) setAutoSlideActive(false);
  };

  const hiddenProvincesStyles = (hiddenIndex: number) => {
    let hiddenStyle = "";

    // The conditions here check if the hiddenIndex is close to the target, if the hiddenIndex is close then i move it to the left with styles, if it's way to far we move it to the right

    if (
      (hiddenIndex < targetIndex &&
        targetIndex - hiddenIndex <= provinces.length / 2) ||
      (hiddenIndex > targetIndex &&
        hiddenIndex - targetIndex > provinces.length / 2)
    ) {
      hiddenStyle = "-translate-x-48";
    } else {
      hiddenStyle = "translate-x-48";
    }

    return `${hiddenStyle} blur-sm scale-x-90 opacity-0 z-[-5]`;
  };

  useEffect(() => {
    if (autoSlideActive) {
      const autoSlide = setTimeout(() => {
        handleSlide("right");
      }, 3500);

      return () => clearTimeout(autoSlide);
    }
  }, [targetIndex, autoSlideActive]);

  return (
    <section
      id="tours-section"
      className="w-full md:w-screen h-full md:h-screen flex flex-col gap-12 md:gap-0 p-6 md:flex-row items-center justify-around bg-slate-200 text-sky-950 relative"
    >
      {/* CAROUSEL */}
      <div className="w-full mt-24 md:mt-0 md:w-1/2 mx-auto flex items-center justify-center">
        <div className="relative rounded-lg">
          {/* PROVINCE NAME */}
          <div className="flex items-center justify-between">
            <motion.p
              key={provinces[targetIndex].name}
              initial={{ opacity: 0, filter: "blur(2px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="text-3xl text-sky-600 mb-4 tracking-wider font-bold"
            >
              {provinces[targetIndex].name}
            </motion.p>
            <div className="flex gap-2 items-center justify-center">
              <p className="text-sm text-sky-950">
                <span className="text-sky-950/80 inline">
                  {targetIndex + 1}
                </span>
                /{provinces.length}
              </p>
              <motion.button
                whileTap={{ scale: 1.1 }}
                onClick={handleAutoSlideToggle}
                className="text-sky-800 rounded-full flex items-center justify-center"
              >
                {autoSlideActive ? (
                  <CiPause1 className="size-5" />
                ) : (
                  <IoPlayOutline className="size-5" />
                )}
              </motion.button>
            </div>
          </div>
          {/* END OF PROVINCE NAME */}
          {/* PROVINCES ITERATION */}
          <div className="w-[350px] md:w-[550px] h-[200px] md:h-[300px] rounded-lg relative flex items-center justify-center">
            {/* LEFT BUTTON */}
            <motion.button
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.25 }}
              className="absolute -left-7 md:-left-10 top-1/2 rounded-md z-[2] text-sky-700/80 p-[1px] flex items-center justify-center"
              onClick={() => handleSlide("left")}
            >
              <FaChevronLeft className="size-4 md:size-6" />
            </motion.button>
            {/*END OF LEFT BUTTON */}
            {provinces.map((province, index) => (
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                key={index}
                className={`absolute duration-500 w-full h-full group shadow-md rounded-lg overflow-hidden ${
                  targetIndex === index ? "" : hiddenProvincesStyles(index)
                }`}
              >
                <img
                  className={`w-full h-full object-cover rounded-lg overflow-hidden duration-200 group-hover:scale-105`}
                  src={province.img}
                  alt={`${province.name} landscape.`}
                />
                <div className="top-0 absolute w-full h-full bg-black/40 rounded-lg duration-300 opacity-0 hover:opacity-100 flex items-end p-6 justify-center group">
                  <MotionLink
                    whileTap={{ scale: 1.1 }}
                    to={`${provinces[targetIndex].title}`}
                    className="opacity-0 group-hover:opacity-100 duration-300 delay-100 text-slate-100 border-slate-100 hover:bg-slate-100/90 hover:text-sky-950 hover:border-slate-100/15 text-sm px-4 py-2 border-2 rounded-lg"
                  >
                    <button>More Info</button>
                  </MotionLink>
                </div>
              </div>
            ))}
            {/* RIGHT BUTTON */}
            <motion.button
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.25 }}
              className="absolute -right-7 md:-right-10 top-1/2 rounded-md z-[2] text-sky-700/80 p-[1px] flex items-center justify-center"
              onClick={() => handleSlide("right")}
            >
              <FaChevronRight className="size-4 md:size-6" />
            </motion.button>
            {/* END OF RIGHT BUTTON */}
          </div>
          {/* END OF PROVINCES ITERATION */}
          {/* PROVINCES NAVIGATE DOTS */}
          <div className="flex items-center justify-center gap-2 p-4 ">
            {provinces.map((province, index) => (
              <button
                title={province.name}
                onClick={() => setTargetIndex(index)}
                key={index}
                className={`p-[5px] rounded-full opacity-90 border-2 shadow-sm hover:bg-sky-600/60 duration-500 ${
                  index === targetIndex
                    ? "border-sky-600/10 bg-sky-600/80 scale-110"
                    : "border-gray-400/50"
                }`}
              />
            ))}
          </div>
          {/* END OF PROVINCES NAVIGATE DOTS */}
          {/* PROVINCE PHRASE */}
          <motion.p
            key={provinces[targetIndex].phrase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="px-2 text-center w-[350px] md:w-[550px] text-sky-950/90 text-base md:text-lg h-20 italic"
          >
            {provinces[targetIndex].phrase}{" "}
            <FaQuoteRight className="inline size-4 md:size-5 ml-2 text-sky-950/70" />
          </motion.p>
          {/* END OF PROVINCE PHRASE */}
        </div>
      </div>
      {/* END OF CAROUSEL */}
      {/* DESCRIPTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center flex-col">
        <div className="md:w-1/2 h-72 relative z-[1]">
          <h4 className="font-bold text-xl tracking-wider text-sky-600 flex items-center">
            <span>
              <motion.button
                key={`${autoSlideActive}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={handleAutoSlideToggle}
                className="md:hidden flex items-center justify-center mr-2 text-sky-800 fill-sky-800"
              >
                {autoSlideActive ? (
                  <CiPause1 className="size-4" />
                ) : (
                  <IoPlayOutline className="size-4" />
                )}
              </motion.button>
            </span>
            Background:
          </h4>
          <motion.p
            key={provinces[targetIndex].desc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sky-900 text-sm md:text-base font-medium"
          >
            {/* Add overflow-hidden */}
            {provinces[targetIndex].desc}
          </motion.p>
        </div>
      </div>
      {/* END OF DESCRIPTION */}
    </section>
  );
};

export default Carousel;
