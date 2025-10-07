import HeroImage from '../assets/Restaurant/Hero8.png';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[520px] md:h-[500px] lg:h-[600px] overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Image de fond */}
      <img
        src={HeroImage}
        alt="Hero"
        className="w-full h-full object-cover object-[85%] md:object-center"
      />

      {/* Overlay sombre uniquement sur mobile avec dégradé vers le bas */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>

      {/* Texte mobile centré / desktop à gauche */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-24">
        <h1 className="text-white text-5xl md:text-6xl leading-snug text-center md:text-left space-y-2">
          <span className="block md:inline font-veneer">Le Majestic</span>
          <span className="block md:inline font-Mistrully"> Restaurant</span>
        </h1>
      </div>
    </section>
  );
}
