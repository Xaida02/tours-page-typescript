import { motion } from "framer-motion";
import AboutUsBg from "../assets/AboutUs.jpg";
import AboutUsVector from "../assets/AboutUsVector.png";

const About = () => {
  return (
    <>
      <section className="w-full h-full min-h-screen bg-slate-200 mt-28 md:mt-2 text-slate-100 p-4 md:px-32 relative z-[1]">
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-full md:w-1/2 p-4 md:p-12 flex flex-col items-center md:items-start">
            <p className="font-semibold text-lg md:text-xl text-slate-100/80">
              About Us
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-sky-400 mt-4">
              Argentina
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold text-sky-400 mt-2">
              Guided <p className="inline text-slate-100/90">Tours</p>
            </h1>
            <p className="text-slate-100/80 text-xs md:text-sm mt-4 md:w-[425px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              voluptatibus totam maiores dolorum.
              <br /> Quia maxime quas modi pariatur totam consequatur nihil quis
              cumque sunt laboriosam natus commodi inventore tempore voluptatum.
              Repudiandae amet iure.
            </p>
            <a
              className="w-full flex items-center justify-center md:w-fit md:block"
              href="#testimonials-section"
            >
              <motion.button
                whileTap={{ scale: 1.05 }}
                className="font-semibold px-4 py-2 rounded-xl border-2 border-sky-700 bg-sky-700 hover:bg-transparent transition-colors duration-300 mt-4 mx-auto md:mx-0 text-slate-100/90 shadow-sm"
              >
                Testimonials
              </motion.button>
            </a>
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-12 flex items-center justify-center select-none relative overflow-hidden group">
            <div className="w-2/3 h-2/3 md:w-1/2 md:h-1/2 m-auto absolute z-0 bg-sky-400/50 duration-300 group-hover:bg-sky-400/70 group-hover:scale-105 rounded-full blur-xl" />
            <img
              draggable="false"
              className="w-96 shadow-sm object-cover rounded-full opacity-90"
              src={AboutUsVector}
              alt="People vector."
            />
          </div>
        </div>
        {/* BACKGROUND */}
        <div className="w-screen h-full md:h-screen top-0 left-0 absolute z-[-1] select-none bg-sky-900">
          <motion.img
            initial={{ filter: "brightness(0)" }}
            animate={{ filter: "brightness(1)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute object-cover w-full h-full contrast-[1.15]"
            src={AboutUsBg}
            alt="Landscape"
          />
          <div className="absolute w-full h-full bg-sky-950/10" />
          <div className="absolute w-full h-full bg-gradient-to-tr from-black/95 via-black/60 to-black/95" />
        </div>
        {/* END OF BACKGROUND */}
      </section>{" "}
      {/* TESTIMONIALS */}
      <section
        id="testimonials-section"
        className="w-full min-h-screen bg-slate-200 py-16 px-8 flex"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6 text-slate-100 antialiased">
          {/* <div className="p-8 rounded-lg bg-sky-700/90 drop-shadow-lg">
            <div className="flex items-center">
              <img
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-4 border-2 shadow border-slate-100"
                src="https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Brook Young profile picture"
              />
              <h4 className="text-slate-100/90">Brook Young</h4>
            </div>
            <p className="mt-2 text-xl lg:text-2xl font-bold">
              An Unforgettable Experience!
            </p>
            <p className="mt-2 text-slate-100/90 text-sm leading-4">
              Exploring Patagonia was like stepping into a dream. The landscapes
              were beyond breathtaking, and every moment felt surreal. If you
              want an adventure of a lifetime, this is it!
            </p>
          </div> */}
          <div className="p-8 rounded-lg lg:col-span-2 bg-sky-700/90 drop-shadow-lg">
            <div className="flex items-center">
              <img
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-4 border-2 shadow border-slate-100"
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=1964&h=1964&q=80"
                alt="Sophia Lee profile picture"
              />
              <h4 className="text-slate-100/90">Sophia Lee</h4>
            </div>
            <p className="mt-2 text-xl lg:text-2xl font-bold">
              Amazing Service!
            </p>
            <p className="mt-2 text-slate-100/90 text-sm leading-4">
              "The attention to detail in each tour was phenomenal. I couldn’t
              get enough of Iguazú Falls. The power and beauty of the water
              crashing down were something I’ll never forget. Everything was
              top-notch, from start to finish. Exploring Patagonia was like
              stepping into a dream. The landscapes were beyond breathtaking,
              and every moment felt surreal. If you want an adventure of a
              lifetime, this is it!"
            </p>
          </div>
          <div className="p-8 rounded-lg bg-sky-700/90 drop-shadow-lg">
            <div className="flex items-center">
              <img
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-4 border-2 shadow border-slate-100"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=1964&h=1964&q=80"
                alt="Liam Anderson profile picture"
              />
              <h4 className="text-slate-100/90">Liam Anderson</h4>
            </div>
            <p className="mt-2 text-xl lg:text-2xl font-bold">
              Highly Recommend!
            </p>
            <p className="mt-2 text-slate-100/90 text-sm leading-4">
              "I received exceptional service that truly exceeded all my
              expectations! From start to finish, I felt valued and cared for,
              and it made all the difference in my overall satisfaction!"
            </p>
          </div>
          <div className="p-8 rounded-lg bg-sky-700/90 drop-shadow-lg">
            <div className="flex items-center">
              <img
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-4 border-2 shadow border-slate-100"
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=1964&h=1964&q=80"
                alt="Olivia Smith profile picture"
              />
              <h4 className="text-slate-100/90">Olivia Smith</h4>
            </div>
            <p className="mt-2 text-xl lg:text-2xl font-bold">
              Memorable and Fun!
            </p>
            <p className="mt-2 text-slate-100/90 text-sm leading-4">
              "I had a blast! The whole experience was filled with joy and
              excitement. I will definitely come back again soon. We took our
              kids to Tierra del fuego, and they absolutely loved it. The lakes,
              forests, and chocolate shops kept everyone entertained. It's
              perfect for families looking for a peaceful yet fun vacation!"
            </p>
          </div>

          <div className="p-8 rounded-lg bg-sky-700/90 drop-shadow-lg lg:col-span-2 row-start-2">
            <div className="flex items-center">
              <img
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-4 border-2 shadow border-slate-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxW3YkQm-62gbHiNxdE57j85JayAyNZBvN2w&s"
                alt="Mykola Hrytsenko profile picture"
              />
              <h4 className="text-slate-100/90">Mykola Hrytsenko</h4>
            </div>
            <p className="mt-2 text-xl lg:text-2xl font-bold">
              Experience Far Beyond Expectations!
            </p>
            <p className="mt-2 text-slate-100/90 text-sm leading-4">
              "This experience was far better than I could have imagined. They
              truly go above and beyond to make sure everything is perfect. I’ve
              always dreamed of visiting Argentina, and this tour made it better
              than I imagined. The Perito Moreno Glacier was stunning, and the
              whole trip was so well organized. I wish I could do it all over
              again. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Atque, culpa mollitia molestiae ex sit aliquid officia quod
              provident fugit? Pariatur earum impedit eligendi dicta non?. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Id quos ex
              ipsam assumenda ab? Modi."
            </p>
          </div>
          <div className="p-8 rounded-lg bg-sky-700/90 drop-shadow-lg lg:row-span-2 lg:row-start-1 lg:col-start-4">
            <div className="flex items-center">
              <img
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-4 border-2 shadow border-slate-100"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=1964&h=1964&q=80"
                alt="Emma Davis profile picture"
              />
              <h4 className="text-slate-100/90">Emma Blouse</h4>
            </div>
            <p className="mt-2 text-xl lg:text-2xl font-bold">
              Simply the Best!
            </p>
            <p className="mt-2 text-slate-100/90 text-sm leading-4">
              "I am incredibly satisfied with how everything turned out. They
              have truly earned my trust. I wasn’t expecting to see such a
              remarkable variety of species, which made the experience even more
              thrilling. The small group tour created an intimate atmosphere,
              allowing for personal interactions and deeper connections with
              both the wildlife and my fellow travelers. Our guide’s passion was
              contagious; their enthusiasm and knowledge brought everything to
              life. I can’t wait to return. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Vitae, magnam. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Blanditiis provident,
              exercitationem expedita sunt doloremque earum, cum molestias
              sapiente possimus ad, dolore accusamus eveniet! Vitae veritatis
              facilis, aut qui dolore explicabo?"
            </p>
          </div>
        </div>
      </section>
      {/* END OF TESTIMONIALS */}
    </>
  );
};

export default About;
