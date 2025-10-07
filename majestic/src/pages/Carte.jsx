import { Link } from "react-router-dom";

import HeroCarte from '../assets/Carte/Hero.avif';
import Carte1 from '../assets/Carte/Smash.jpeg';
import Carte2 from '../assets/Carte/Sandwichs.jpeg';
import Carte3 from '../assets/Carte/Tiramisu.png';
import Carte4 from '../assets/Carte/Glaces.png';
import Carte5 from '../assets/Carte/Salade.png';
import Carte6 from '../assets/Carte/Smoothies.jpeg';
import Carte7 from '../assets/Carte/Woks.png';
import Carte8 from '../assets/Carte/Daim.jpeg';
import Carte9 from '../assets/Carte/TexMex.jpeg';
import Carte10 from '../assets/Carte/Burger.jpeg';
import Carte11 from '../assets/Carte/Assiettes.jpeg';





const Carte = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Section Hero */}
      <div className="relative h-[520px] md:h-[500px] lg:h-[600px] pt-16 md:pt-20 lg:pt-24">
        {/* Image de fond */}
        <img
          src={HeroCarte}
          alt="Hero"
          className="w-full h-full object-cover object-[55%] scale-110 md:scale-100 transition-transform duration-500"
        />

        {/* Overlay sombre uniquement sur mobile avec dégradé vers le bas */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

        {/* Texte mobile centré / desktop à gauche */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-24">
          <h1 className="text-white text-3xl md:text-5xl leading-snug text-center md:text-left space-y-4">
            <span className="block font-veneer">La Carte Du Majestic</span>
            <span className="block font-Mistrully">
              Découvrez la carte du Majestic.
            </span>
          </h1>
        </div>
      </div>

      {/* Section Galerie en bas */}
    <div className="bg-[#EDE8E4] py-12 px-4 md:px-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
        <Link to="/Assiettes"> 
          <img
          src={Carte11}
          alt="Assiettes"
          className="w-full max-h-[400px] object-contain rounded-lg shadow"
      /></Link>
     <Link to="/Salade">
          <img
      src={Carte5}
      alt="Carte 2"
      className="w-full max-h-[400px] object-contain rounded-lg shadow"
    /> </Link>

        <Link to="/Woks">
        <img
      src={Carte7}
      alt="Carte 1"
      className="w-full max-h-[400px] object-contain rounded-lg shadow"
    /></Link>

    <img
      src={Carte2}
      alt="Carte 2"
      className="w-full max-h-[400px] object-contain rounded-lg shadow"
    />
    <img
      src={Carte3}
      alt="Carte 3"
      className="w-full max-h-[400px] object-contain rounded-lg shadow"
    />
        <img
      src={Carte4}
      alt="Carte 1"
      className="w-full max-h-[400px] object-contain rounded-lg shadow"
    />
   

    <img
      src={Carte6}
      alt="Carte 3"
      className="w-full max-h-[400px] object-contain rounded-lg shadow"
    />

    <img
      src={Carte8}
      alt="Carte 2"
      className="w-full max-h-[400px] object-contain rounded-lg shadow"
    />
    <img
      src={Carte9}
      alt="Carte 3"
      className="w-full max-h-[400px] object-contain rounded-lg shadow"
    />
        <img
      src={Carte10}
      alt="Carte 3"
      className="w-full max-h-[400px] object-contain rounded-lg shadow"
    />

    
  </div>
</div>


    </section>
  );
};

export default Carte;
