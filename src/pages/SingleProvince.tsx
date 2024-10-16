import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { provinces } from "../shared/provinces";
import { Province } from "../shared/provinces";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { MdPayments } from "react-icons/md";

const SingleProvince = () => {
  const { province } = useParams();
  const [pageProvince, setPageProvince] = useState<Province | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const targetProvince = provinces.find((item) => item.title === province);
    if (targetProvince) {
      setPageProvince(targetProvince);
    }
  }, [province]);

  return (
    pageProvince && (
      <section className="w-screen min-h-screen h-full grid  md:grid-cols-2 bg-gradient-to-r from-slate-200 via-slate-50 to-slate-200 text-sky-950 mt-28 md:mt-12 p-1 md:p-12 relative">
        {/* MODAL */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed w-full h-full flex items-center justify-center top-0 bg-slate-950/50 z-40"
            >
              <motion.section
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="bg-slate-200 px-5 md:px-10 py-4 md:py-8 rounded-lg shadow-lg relative"
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute p-2 right-2 top-1 text-red-800 duration-300 hover:scale-150"
                >
                  <IoMdClose className="size-5" />
                </button>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  This tour includes:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm w-64 md:w-96">
                  <li>Comfortable hotel accommodations for a relaxing stay.</li>
                  <li className="mt-2">
                    Expert-led guided tours to explore must-see destinations.
                  </li>
                  <li className="mt-2">
                    Fun group activities designed to foster connection and
                    adventure.
                  </li>
                  <li className="mt-2">
                    A variety of curated food tastings to savor local flavors.
                  </li>
                </ul>
                <div className="w-full flex items-center justify-center mt-4">
                  <button className="px-3 py-1 rounded-md bg-emerald-600 shadow text-slate-100 hover:scale-105 duration-300 flex text-sm md:text-base items-center justify-center gap-2">
                    <p>Pay Options</p>
                    <MdPayments />
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
        {/* END OF MODAL */}
        {/* FIRST HALF */}
        <div className="py-4 px-4 md:px-12">
          {/* PROVINCE IMAGE */}
          <div className="rounded-xl shadow-xl relative overflow-hidden bg-slate-200/50 group">
            <div className="absolute w-full top-2 flex items-center justify-between font-semibold md:font-normal text-[8px] md:text-xs p-1 md:p-2 z-[1]">
              <p className="cursor-pointer shadow bg-slate-100/90 hover:scale-105 hover:bg-slate-100 duration-300 px-1 md:px-2 py-1 rounded-md">
                {pageProvince.climate}
              </p>
              <p className="cursor-pointer shadow bg-slate-100/90 hover:scale-105 hover:bg-slate-100 duration-300 px-1 md:px-2 py-1 rounded-md">
                "{pageProvince.phrase}"
              </p>
            </div>
            <motion.img
              key={`${pageProvince.name} main image.`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={pageProvince.img}
              alt={pageProvince.name}
              className="w-full h-[225px] md:h-[350px] object-cover rounded-xl mx-auto duration-300 group-hover:brightness-75 group-hover:scale-110 z-[-1] cursor-pointer"
            />{" "}
            <div className="absolute w-full bottom-2 flex items-center justify-center p-2 z-[1]">
              <button
                onClick={() => setShowModal(true)}
                className="px-3 py-1 text-xs md:text-base rounded-md bg-emerald-600 shadow text-slate-100 opacity-0 group-hover:opacity-100 hover:scale-105 duration-300"
              >
                Book tour
              </button>
            </div>
          </div>
          {/* END OF PROVINCE IMAGE */}
          {/* MORE IMAGES */}
          <div className="w-full shadow rounded-xl mt-4 md:mt-12 bg-slate-50 grid grid-flow-col p-2 md:p-4 gap-2 md:gap-4">
            {pageProvince.moreImages.map((image, index) => (
              <div
                key={`${province} image number ${index}`}
                className="w-full shadow-sm overflow-hidden rounded-lg bg-slate-200/50 hover:scale-105 cursor-pointer duration-300"
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 * index }}
                  className="h-[75px] md:h-[120px] w-full md:w-64 object-cover"
                  src={image}
                  alt={`${pageProvince.name} pic.`}
                />
              </div>
            ))}
          </div>
          {/* END OF MORE IMAGES */}
        </div>
        {/* END OF FIRST HALF */}
        {/* SECOND HALF */}
        <div className="overflow-hidden py-4 px-4 md:px-12">
          <h1 className="text-2xl md:text-3xl font-bold text-sky-600 tracking-wide">
            {pageProvince.name}
          </h1>
          {/* DESCRIPTION */}
          <div className="mt-4">
            <h3 className="font-medium text-base md:text-lg py-2 text-sky-700 pl-2 md:pl-0">
              Description:
            </h3>
            <p className="text-xs md:text-sm text-sky-950/70 w-4/5 pl-4 md:pl-0">
              {pageProvince.desc}
            </p>
          </div>
          {/* END OF DESCRIPTION */}
          {/* FOOD CONTAINER */}
          <div className="mt-2">
            <h3 className="font-medium text-base md:text-lg py-2 text-sky-700 pl-2 md:pl-0">
              Food:
            </h3>
            <p className="text-xs md:text-sm text-sky-950/70 w-4/5 pl-4 md:pl-0">
              {pageProvince.food}.
            </p>
          </div>
          {/* END OF FOOD CONTAINER */}
          {/* MUSIC CONTAINER */}
          <div className="mt-2">
            <h3 className="font-medium text-base md:text-lg py-2 text-sky-700 pl-2 md:pl-0">
              Music:
            </h3>
            <p className="text-xs md:text-sm text-sky-950/70 w-4/5 pl-4 md:pl-0">
              {pageProvince.localMusic}.
            </p>
          </div>
          {/* END OF MUSIC CONTAINER */}
          {/* ACTIVITIES CONTAINER */}
          <div className="mt-2">
            <h3 className="font-medium text-base md:text-lg py-2 text-sky-700 pl-2 md:pl-0">
              Featured activities:
            </h3>
            <div className="w-full md:w-4/5 h-4/5">
              <div className="grid grid-cols-2 grid-rows-3 rounded-xl p4 shadow border border-sky-950/10 overflow text-sm overflow-hidden">
                {pageProvince.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 border border-sky-950/10 cursor-pointer hover:scale-105 duration-300 bg-slate-50"
                  >
                    <div className="flex items-center justify-between">
                      {activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* END OF ACTIVITIES CONTAINER */}
        </div>
        {/* END OF SECOND HALF */}
      </section>
    )
  );
};

export default SingleProvince;
