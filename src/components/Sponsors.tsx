import MercadoLibreLogo from "../assets/MercadoLibreLogo.png";
import GlobantLogo from "../assets/GlobantLogo.png";
import YPFLogo from "../assets/YPFLogo.png";
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <section className="w-full h-full grid py-12 bg-gradient-to-b md:bg-gradient-to-r from-sky-600 to-sky-600 md:from-sky-400 md:via-sky-700 md:to-sky-400 text-slate-50">
      {/* TITLE */}
      <div className="mx-auto text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -50, filter: "blur(2px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold"
        >
          Our Sponsors
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -15, filter: "blur(2px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs md:text-base text-slate-100 mt-2"
        >
          Proudly supported by companies that share our vision.
        </motion.h2>
      </div>
      {/* END OF TITLE */}
      {/* SPONSORS CONTAINER */}
      <div className="w-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 md:py-12">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-64 h-40 md:w-52 md:h-32 p-12 rounded-lg flex items-center justify-center bg-slate-200 flex-col text-sky-950 shadow-md group ring-4 ring-transparent hover:ring-slate-100/20 duration-200 relative"
        >
          <img
            className="object-cover w-full group-hover:scale-110 group-hover:brightness-110 duration-300 relative"
            src={MercadoLibreLogo}
            alt="Mercado libre logo."
          />
          <p className="absolute -bottom-6 md:-bottom-8 text-xs md:text-sm text-slate-100/80">
            Mercado Libre
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-64 h-40 md:w-52 md:h-32 p-12 rounded-lg flex items-center justify-center bg-slate-200 flex-col text-sky-950 shadow-md group ring-4 ring-transparent hover:ring-slate-100/20 duration-200 relative"
        >
          <img
            className=" object-cover w-full group-hover:scale-110 group-hover:brightness-110 duration-300 relative"
            src={GlobantLogo}
            alt="Globant logo."
          />
          <p className="absolute -bottom-6 md:-bottom-8 text-xs md:text-sm text-slate-100/80">
            Globant
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-64 h-40 md:w-52 md:h-32 p-12 rounded-lg flex items-center justify-center bg-slate-200 flex-col text-sky-950 shadow-md group ring-4 ring-transparent hover:ring-slate-100/20 duration-200 relative"
        >
          <img
            className="object-cover w-full group-hover:scale-110 group-hover:brightness-110 duration-300 relative"
            src={YPFLogo}
            alt="YPF logo."
          />
          <p className="absolute -bottom-6 md:-bottom-8 text-xs md:text-sm text-slate-100/80">
            YPF
          </p>
        </motion.div>
      </div>
      {/* END OF SPONSORS CONTAINER */}
    </section>
  );
};

export default Sponsors;
