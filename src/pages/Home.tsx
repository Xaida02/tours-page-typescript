import HomeBg from "../assets/HomeBg.jpg";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <>
      <div className="w-full h-full md:h-screen overflow-hidden flex font-bold text-slate-100 relative shadow-lg md:shadow-2xl z-[2]">
        {/* HERO */}
        <div className="my-12 md:my-0 w-full h-full grid grid-rows-4 md:px-40 md:py-24">
          <div className="row-span-3 flex flex-col gap-6 p-4 my-auto items-center md:items-start">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(5px)", y: 25 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="select-none text-[60px] md:text-[80px]"
            >
              ARGENTINA
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, filter: "blur(5px)", y: 25 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 1,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="text-md md:text-2xl tracking-wider text-slate-100/90"
            >
              WHERE PASSION MEETS TRADITION
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, filter: "blur(5px)", y: 25 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.5,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              <p className="text-xs md:text-sm font-light text-center md:text-start md:w-1/3 text-slate-100/90 md:text-slate-100/70">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                veniam aspernatur ab quod, consequatur dignissimos magnam
                voluptas vel provident aliquid ullam porro sequi eaque at?
              </p>
              <a
                className="w-full flex items-center justify-center md:w-fit md:block"
                href="#tours-section"
              >
                <motion.button
                  whileTap={{ scale: 1.05 }}
                  className="font-semibold px-4 py-2 rounded-xl border-2 border-sky-600 bg-sky-600 hover:bg-transparent transition-colors duration-300 mt-4 mx-auto md:mx-0"
                >
                  Explore Tours
                </motion.button>
              </a>
            </motion.div>
          </div>
          <div className="row-span-1 flex flex-col p-4 my-auto items-center md:items-end">
            <div className="grid gap-3">
              <motion.h2
                initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-xl text-slate-100/90 tracking-wider"
              >
                PLAN YOUR
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: 1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className="select-none text-[50px] md:text-[55px] text-sky-400"
              >
                VACATION
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-xl text-slate-100/90 tracking-wider"
              >
                WITH US
              </motion.h2>
            </div>
          </div>
        </div>
        {/* END OF HERO */}
        {/* BACKGROUND */}
        <div className="w-screen h-full md:h-screen top-0 left-0 absolute z-[-1] select-none bg-sky-900">
          <motion.img
            initial={{ filter: "brightness(0)" }}
            animate={{ filter: "brightness(1)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute object-cover w-full h-full contrast-[1.15]"
            src={HomeBg}
            alt="Landscape"
          />
          <div className="absolute w-full h-full bg-sky-950/10" />
          <div className="absolute w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
        </div>
        {/* END OF BACKGROUND */}
      </div>
      <Carousel />
      <Sponsors />
      <Footer />
    </>
  );
};

export default Home;
