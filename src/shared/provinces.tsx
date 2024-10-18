import BuenosAires from "../assets/Caba.png";
import Formosa from "../assets/Formosa.png";
import Cordoba from "../assets/Cordoba.jpg";
import Misiones from "../assets/Misiones.jpeg";
import TierraDelFuego from "../assets/TierraDelFuego.jpeg";
import Salta from "../assets/Salta.jpg";
import Mendoza from "../assets/Mendoza.jpg";
import {
  FaBinoculars,
  FaFish,
  FaHiking,
  FaItunesNote,
  FaRedhat,
  FaShoppingBag,
  FaSkiing,
  FaTrain,
  FaWater,
} from "react-icons/fa";
import { MdDinnerDining, MdMuseum, MdOutlineNightlife } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import {
  GiCampingTent,
  GiGrapes,
  GiKite,
  GiParkBench,
  GiWaterfall,
} from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { IoWineSharp } from "react-icons/io5";
import { SiFauna, SiMentorcruise, SiPuma } from "react-icons/si";
import { TbBrandMinecraft } from "react-icons/tb";

export interface Province {
  title: string;
  name: string;
  img: string;
  population: number;
  climate: string;
  food: string;
  localMusic: string;
  mainAttractions: string;
  phrase: string;
  desc: string;
  activities: JSX.Element[]; // Updated to hold JSX elements
  moreImages: string[];
}

export const provinces = [
  {
    title: "buenos-aires",
    name: "Buenos Aires",
    img: BuenosAires,
    population: 15625084,
    climate: "Humid subtropical",
    food: "Asado, provoleta, matambre, lomito, choripan",
    localMusic: "Tango, Folklore, Rock",
    mainAttractions: "La Boca, Palermo, Recoleta",
    phrase: "The Heart of Argentina Beats in Buenos Aires",
    desc: "Buenos Aires is the bustling capital of Argentina, known for its rich cultural heritage, vibrant nightlife, and historic architecture. The city is home to many iconic landmarks such as the Obelisk and the Teatro Colon, as well as trendy neighborhoods like Palermo and Recoleta. Visitors can also enjoy traditional Argentine cuisine, such as empanadas and asado, and experience the passion of the tango dance.",
    activities: [
      <>
        <p>Tango dancing</p>
        <FaItunesNote className="size-4" />
      </>,
      <>
        <p>Museum visits</p>
        <MdMuseum className="size-4" />
      </>,
      <>
        <p>Shopping</p>
        <FaShoppingBag className="size-4" />
      </>,
      <>
        <p>Dining at restaurants</p>
        <MdDinnerDining />
      </>,
      <>
        <p>Exploring parks</p>
        <GiParkBench className="size-4" />
      </>,
      <>
        <p>Nightlife experiences</p>
        <MdOutlineNightlife className="size-4" />
      </>,
    ],
    moreImages: [
      "https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182-1536x1024.jpeg",
      "https://buenosairesshoppingtours.com/img/notas/42b87209d7eae715d427fa39ecdf84f7156125c6.jpg",
      "https://cdn.getyourguide.com/img/tour/5d3975eb57fc3.jpeg/97.jpg",
    ],
  },
  {
    title: "formosa",
    name: "Formosa",
    img: Formosa,
    population: 552190,
    climate: "Semi-arid",
    food: "Empanadas, asado, mandioca stew, tajá(crocodrile BBQ)",
    localMusic: "Carnavalito, el huayno, la cueca",
    mainAttractions:
      "Formosa's National Park, The Pilcomayo River, The Paraná Delta",
    phrase: "Where Nature Paints a Different Story",
    desc: "Formosa is a province in northern Argentina known for its natural beauty and rich biodiversity. It's home to the Formosa's National Park, which offers a variety of outdoor activities such as hiking and wildlife watching. The Pilcomayo River and the Paraná Delta are also popular attractions, offering opportunities for fishing and boating. Formosa's semi-arid climate and traditional Argentine cuisine, such as empanadas and asado, make it a unique destination for visitors.",
    activities: [
      <>
        <p>Hiking</p>
        <FaHiking className="size-4" />
      </>,
      <>
        <p>Fishing</p>
        <FaFish className="size-4" />
      </>,
      <>
        <p>Wildlife watching</p>
        <SiPuma className="size-4" />
      </>,
      <>
        <p>Boating</p>
        <FaSailboat className="size-4" />
      </>,
      <>
        <p>Camping</p>
        <GiCampingTent className="size-4" />
      </>,
      <>
        <p>Exploring nature reserves</p>
        <GiParkBench className="size-4" />
      </>,
    ],
    moreImages: [
      "https://icz-desk.s3.us-west-2.amazonaws.com/schools/formosa.jpg",
      "https://lorient.com.ar/assets/img/formosa.webp",
      "https://www.clarin.com/img/2017/08/04/BkyhLcEvZ_720x0.jpg",
    ],
  },
  {
    title: "cordoba",
    name: "Córdoba",
    img: Cordoba,
    population: 3567654,
    climate: "Semi-arid",
    food: "Empanadas, asado, churrasco, locro",
    localMusic: "Folklore, Cuarteto, Cumbia",
    mainAttractions:
      "The Sierras de Córdoba, The Jesuitic Block, The Historical Center",
    phrase: "Mountains, Music, and Endless Memories",
    desc: "The province of Córdoba is located in the center of Argentina and is known for its rich cultural heritage and picturesque landscapes. The Sierras de Córdoba are a must-see attraction, offering some awesome afternoon picnic opportunities. The Jesuitic Block and the Historical Center are also popular, showcasing the province's history and strong Spanish heritage. Córdoba's humid subtropical climate and traditional Argentine cuisine make it a great destination for visitors.",
    activities: [
      <>
        <p>Hiking</p>
        <FaHiking className="size-4" />
      </>,
      <>
        <p>Visiting historical sites</p>
        <MdMuseum className="size-4" />
      </>,
      <>
        <p>Wine tasting</p>
        <IoWineSharp className="size-4" />
      </>,
      <>
        <p>Camping</p>
        <GiCampingTent className="size-4" />
      </>,
      <>
        <p>Exploring local culture</p>
        <FaRedhat className="size-4" />
      </>,
      <>
        <p>Enjoying outdoor activities</p>
        <GiParkBench className="size-4" />
      </>,
    ],
    moreImages: [
      "https://www.argentina.gob.ar/sites/default/files/cordoba-la-canada-landing.jpg",
      "https://media.ambito.com/p/7b66be28d38cf2c73668a5b8c043c653/adjuntos/239/imagenes/038/267/0038267170/1200x675/smart/cordoba.jpg",
      "https://tripin.travel/wp-content/uploads/2016/08/Tajamar-alta-gracia-cordoba-2-1024x538.jpg",
    ],
  },
  {
    title: "misiones",
    name: "Misiones",
    img: Misiones,
    population: 1128201,
    climate: "Humid subtropical",
    food: "Asado, locro, dulce de leche, chipa",
    localMusic: "Chamamé, la guarania, el purajhei",
    mainAttractions: "Iguazu Falls, Yerba mate",
    phrase: "Home of the Mighty Falls and Hidden Wonders",
    desc: "Known for its lush subtropical forests and cascading waterfalls, the province of Misiones is a nature lover's paradise. The Iguazu National Park, home to the famous Iguazu Falls, is a must-see attraction. Visitors can also explore the local culture and history through traditional crafts and indigenous communities.",
    activities: [
      <>
        <p>Visiting waterfalls</p>
        <GiWaterfall className="size-4" />
      </>,
      <>
        <p>Hiking</p>
        <FaHiking className="size-4" />
      </>,
      <>
        <p>Bird watching</p>
        <SiFauna className="size-4" />
      </>,
      <>
        <p>Exploring local crafts</p>
        <TbBrandMinecraft className="size-4" />
      </>,
      <>
        <p>Cultural experiences</p>
        <MdMuseum className="size-4" />
      </>,
      <>
        <p>River activities</p>
        <FaWater className="size-4" />
      </>,
    ],
    moreImages: [
      "https://www.canal12misiones.com/wp-content/uploads/2022/09/cataratas-del-iguazu-1-759x500-1.jpg",
      "https://radiotupambae.com.ar/wp-content/uploads/2023/07/turismo-posadas-2-1.jpeg",
      "https://universes.art/fileadmin/_migrated/gridelement_uploads/San-Ignacio-IMG_4467-2000-750_03.jpg",
    ],
  },
  {
    title: "tierra-del-fuego",
    name: "Tierra del fuego",
    img: TierraDelFuego,
    population: 367448,
    climate: "Subantarctic",
    food: "Lamb, fish, patagonian clam, seafood, spider crab stew",
    localMusic: "Loncomeo, la cordillerana, el chorrillero",
    mainAttractions: "The Tierra del Fuego National Park, The Ushuaia Bay",
    desc: "Ushuaia is the southernmost city in the world and the capital of the Argentine province of Tierra del Fuego. It's surrounded by stunning natural beauty and offers a variety of outdoor activities such as hiking, skiing, and fishing. The Tierra del Fuego National Park and the Ushuaia Bay are must-see attractions. The city also offers a unique blend of culture, history, and adventure.",
    phrase: "The End of the World, The Beginning of Adventure",
    activities: [
      <>
        <p>Hiking</p>
        <FaHiking className="size-4" />
      </>,
      <>
        <p>Skiing</p>
        <FaSkiing className="size-4" />
      </>,
      <>
        <p>Fishing</p>
        <FaFish className="size-4" />
      </>,
      <>
        <p>Wildlife tours</p>
        <SiPuma className="size-4" />
      </>,
      <>
        <p>Exploring national parks</p>
        <GiParkBench className="size-4" />
      </>,
      <>
        <p>Cruising</p>
        <SiMentorcruise className="size-4" />
      </>,
    ],
    moreImages: [
      "https://www.latrochadigital.com.ar/wp-content/uploads/2021/06/tierradelfuego.jpg",
      "https://www.patagoniatraveler.com/images/modulos/turismo/excursiones/91/galeria/1142_02Banner.jpg",
      "https://www.localguidesconnect.com/t5/image/serverpage/image-id/1379312iFBFC47E02A1C1D83?v=v2",
    ],
  },
  {
    title: "salta",
    name: "Salta",
    img: Salta,
    population: 577466,
    climate: "Semi-arid",
    food: "Empanadas, asado, humita, tamal",
    localMusic: "Zambas, chacarera, carnavalito",
    mainAttractions: "The Hill of Seven Colors, The Inca Baths, The Cathedral",
    phrase:
      "From the majestic Andes of Salta, A Province of Color and Contrast",
    desc: "The province of Salta is rich in history and culture, with a colorful blend of indigenous and Spanish influences. The charming colonial city of Salta, the provincial capital, is known for its well-preserved architecture and lively cultural scene. Visitors can explore the area's rich history through its many museums and historical sites or take a scenic train ride through the stunning Andean landscapes.",
    activities: [
      <>
        <p>Sightseeing</p>
        <FaBinoculars className="size-4" />
      </>,
      <>
        <p>Hiking</p>
        <FaHiking className="size-4" />
      </>,
      <>
        <p>Cultural tours</p>
        <MdMuseum className="size-4" />
      </>,
      <>
        <p>Exploring local cuisine</p>
        <MdDinnerDining className="size-4" />
      </>,
      <>
        <p>Visiting historical sites</p>
        <MdMuseum className="size-4" />
      </>,
      <>
        <p>Train rides</p>
        <FaTrain className="size-4" />
      </>,
    ],
    moreImages: [
      "https://www.cronista.com/files/image/702/702342/654405eb168da.jpg",
      "https://static.wixstatic.com/media/042c65_cecba0a7d5614dcc9ff85c59a1042ccd~mv2_d_3888_2592_s_4_2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/042c65_cecba0a7d5614dcc9ff85c59a1042ccd~mv2_d_3888_2592_s_4_2.jpg",
      "https://travel-guide.daytours4u.com/es/wp-content/uploads/sites/3/2021/12/1-10-Things-We-Bet-You-Didnt-Know-About-Salta.png.webp",
    ],
  },
  {
    title: "mendoza",
    name: "Mendoza",
    img: Mendoza,
    population: 3567654,
    climate: "Semi-arid",
    food: "Wine, asado, locro, corn stew",
    localMusic: "La tonada, la cueca, el gato, Rock",
    mainAttractions: "Aconcagua",
    phrase: "Sip, Savor, and Soar Among the Vines",
    desc: "Known for its world-renowned wines, the province of Mendoza is the heart of Argentina's wine country. Visitors can explore the picturesque vineyards and wineries, and taste the region's delicious wines. The Andes Mountains provide a stunning backdrop to the region, offering opportunities for hiking and outdoor activities. The city of Mendoza, the provincial capital, is also known for its lively nightlife and delicious local cuisine.",
    activities: [
      <>
        <p>Wine tasting</p>
        <IoWineSharp className="size-4" />
      </>,
      <>
        <p>Hiking</p>
        <FaHiking className="size-4" />
      </>,
      <>
        <p>Dining</p>
        <MdDinnerDining className="size-4" />
      </>,
      <>
        <p>Exploring vineyards</p>
        <GiGrapes className="size-4" />
      </>,
      <>
        <p>Outdoor adventures</p>
        <GiKite className="size-4" />
      </>,
      <>
        <p>Participating in festivals</p>
        <AiFillFire className="size-4" />
      </>,
    ],
    moreImages: [
      "https://media.urgente24.com/p/a255ed6f310be93be185f49df2d66957/adjuntos/319/imagenes/002/788/0002788542/vacaciones-mendoza-cuanto-cuesta-veranear-san-rafael.jpg",
      "https://001e6926.rocketcdn.me/wp-content/uploads/2021/10/DSC6234.jpg",
      "https://www.clarin.com/img/2017/02/03/r1iIl4MOg_1200x0.jpg",
    ],
  },
];
