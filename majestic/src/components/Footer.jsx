import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Avis Section */}
      <div className="text-left mb-10 px-6 md:pl-24">
        <h2
          className="font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          style={{
            fontFamily: "veneer, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            color: "rgb(255, 255, 255)",
          }}
        >
          VOTRE AVIS COMPTE !
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl mt-2"
          style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 300,
            fontStyle: "normal",
            color: "rgb(255, 255, 255)",
          }}
        >
          Laissez-nous votre Avis sur Google !
        </p>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-[#FB953A] w-11/12 md:w-4/5 mx-auto mb-8"></div>

      {/* Footer Content */}
      <div
        className="px-6 md:pl-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-20 text-base sm:text-lg"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        {/* Logo + Contact */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-3xl font-extrabold text-[#FB953A] mb-4 whitespace-nowrap">
            Le <span className="text-white">Majestic</span>
          </h1>
          <p className="text-[#FB953A] font-bold mb-3">01.49.87.01.59</p>
          <p>49 Avenue de Paris</p>
          <p>94800 Villejuif</p>
          <a
            href="http://www.Majestic.restaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FB953A] font-semibold mt-2 block hover:underline"
          >
            www.Majestic.restaurant
          </a>
        </div>

        {/* Le Majestic */}
        <div>
          <h3 className="text-[#FB953A] font-bold mb-4 sm:mb-6 text-lg sm:text-xl">
            Le Majestic
          </h3>
          <ul className="space-y-3 sm:space-y-6 text-gray-300 hover:[&>li]:text-white transition-all">
            <li>Présentation</li>
            <li>Nos Services</li>
            <li>Nos Valeurs</li>
            <li>Actualités</li>
          </ul>
        </div>

        {/* La Carte */}
        <div>
          <h3 className="text-[#FB953A] font-bold mb-4 sm:mb-6 text-lg sm:text-xl">
            La Carte
          </h3>
          <ul className="space-y-3 sm:space-y-6 text-gray-300 hover:[&>li]:text-white transition-all">
            <li>Burgers & Smash</li>
            <li>Carte Brasserie</li>
            <li>Plats Thaïlandais</li>
            <li>Fried Chicken</li>
          </ul>
        </div>

        {/* Nous Rejoindre */}
        <div>
          <h3 className="text-[#FB953A] font-bold mb-4 sm:mb-6 text-lg sm:text-xl">
            Nous Rejoindre
          </h3>
          <ul className="space-y-3 sm:space-y-6 text-gray-300 hover:[&>li]:text-white transition-all">
            <li>La Franchise BgZ</li>
            <li>Travailler au Beegee'z</li>
            <li>Espace Partenaires</li>
            <li>Nous Contacter</li>
          </ul>
        </div>

        {/* Infos Légales */}
        <div>
          <h3 className="text-[#FB953A] font-bold mb-4 sm:mb-6 text-lg sm:text-xl">
            Infos Légales
          </h3>
          <ul className="space-y-3 sm:space-y-6 text-gray-300 hover:[&>li]:text-white transition-all">
            <li>Conditions Générales</li>
            <li>Confidentialité</li>
            <li>Gestion des Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
