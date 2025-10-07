import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faMapMarkerAlt,
  faChevronDown,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import fbIcon from "../../assets/fb.svg";
import instaIcon from "../../assets/insta.svg";
import snapIcon from "../../assets/snap.svg";
import tiktokIcon from "../../assets/tiktok.svg";
import whatsappIcon from "../../assets/whatsapp.png";
import wazeIcon from "../../assets/waze.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll quand le menu burger est ouvert
  useEffect(() => {
    if (showBurgerMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showBurgerMenu]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 pb-4 font-oswald transition-colors duration-300 bg-white`}>
      <div className="w-full px-10">
        <div className="flex justify-between items-center h-16">
          {/* Conteneur GAUCHE - Menu Burger */}
          <div className="flex-1 flex items-center">
            <div className="relative">
              <button
                onClick={() => setShowBurgerMenu(!showBurgerMenu)}
                className="focus:outline-none z-50"
                aria-label={showBurgerMenu ? "Fermer le menu" : "Ouvrir le menu"}
              >
                <div className="flex flex-col justify-center items-center w-8 h-8">
                  <div 
                    className={`w-6 h-0.5 transition-all duration-300 ${showBurgerMenu ? 'rotate-45 translate-y-2' : ''} bg-[#DC2626]`}
                  ></div>
                  <div 
                    className={`w-6 h-0.5 transition-all duration-300 ${showBurgerMenu ? 'opacity-0' : 'opacity-100 my-1.5'} bg-[#DC2626]`}
                  ></div>
                  <div 
                    className={`w-6 h-0.5 transition-all duration-300 ${showBurgerMenu ? '-rotate-45 -translate-y-2' : ''} bg-[#DC2626]`}
                  ></div>
                </div>
              </button>
            </div>
          </div>

          {/* Partie droite */}
          <div className="flex items-center">
            <div
              className="relative flex items-center cursor-pointer select-none"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
                <button className="font-bold text-lg pt-4 items-center space-x-1 hidden sm:flex transition-colors duration-300 text-red-600">
  <span>La Carte</span>
  <FontAwesomeIcon icon={faChevronDown} className="text-red-600" />
</button>
            </div>

            <div className="ml-16 pt-4 flex items-center space-x-10">
              <Link to="/la-Carte" title="Restaurant">
                <FontAwesomeIcon
                  icon={faUtensils}
                  className="text-[#DC2626] text-xl sm:text-2xl"
                />
              </Link> 

              <a href="#" title="Localisation">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-[#DC2626] text-xl sm:text-2xl"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MENU BURGER */}
      <nav 
        className={`fixed top-0 left-0 z-40 h-full w-full sm:w-[80%] max-w-sm bg-white text-white shadow-xl transition-transform duration-300 ease-in-out transform ${showBurgerMenu ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between ">
          <div className="pt-12 px-12">
            <img
              src="/Majestic.png"
              alt="Logo"
              className="h-26 object-contain"
            />
          </div>
          <button 
            onClick={() => setShowBurgerMenu(false)}
            className="text-[#DC2626] hover:bg-[#DC2626] hover:text-white rounded-full p-2 transition-colors duration-200 self-start"
          >
            <FontAwesomeIcon 
              icon={faTimes} 
              className="text-3xl"
            />
          </button>
        </div>

        <div className="px-6 py-8">
          <ul className="space-y-6 text-lg font-bold text-black">
            <li className="border-b border-[#DC2626] pb-4">
              <a href="#">Le Restaurant</a>
            </li>
            <li className="border-b border-[#DC2626] pb-4">
              <a href="#">La Carte du Majestic</a>
            </li>
            <li className="border-b border-[#DC2626] pb-4">
              <a href="#">Laisser un Avis</a>
            </li>
          </ul>

          <div className="mt-10 text-center text-black">
            <p className="mb-4 font-semibold">Suivez-nous !</p>
            <div className="flex justify-center space-x-5">
              <img src={fbIcon} alt="Facebook" className="w-12 h-12 object-contain" />
              <img src={instaIcon} alt="Instagram" className="w-12 h-12 object-contain" />
              <img src={snapIcon} alt="Snapchat" className="w-12 h-12 object-contain" />
              <img src={tiktokIcon} alt="TikTok" className="w-12 h-12 object-contain" />
            </div>
          </div>

          <div className="flex justify-around mt-10">
            <a
              href="tel:+123456789"
              className="bg-green-500 text-white py-3 px-6 rounded-full flex items-center space-x-2"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 object-contain" />
              <span>Appeler</span>
            </a>
            <a
              href="#"
              className="bg-sky-400 text-white py-3 px-6 rounded-full flex items-center space-x-2"
            >
              <img
                src={wazeIcon}
                alt="Waze"
                className="w-8 h-6 object-contain"
              />
              <span>Let’s Go</span>
            </a>
          </div>

          <div className="text-center text-sm mt-8 text-black">
            ©2025 Le Majestic ⚡
            <div className="flex justify-center space-x-6 mt-2">
              <a href="#" className="hover:underline">
                Infos Légales
              </a>
              <a href="#" className="hover:underline">
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu déroulant La Carte */}
      {showMenu && (
        <div
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          className="fixed top-[4rem] left-0 w-full h-[calc(90vh-4rem)] z-40 flex"
        >
          <div className="w-75% bg-white/80 p-8 overflow-auto pt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                ["Classic's", "Un classique à chaque bouchée.", "/icons/classics.png"],
                ["Smashs", "Une viande smashée pour un max de goût.", "/icons/smashs.png"],
                ["Sandwichs", "L'original casse-dalle généreux et délicieux.", "/icons/sandwichs.png"],
                ["Fried Chicken", "Pour les amoureux de poulet croustillant.", "/icons/fried-chicken.png"],
                ["Plats Brasserie", "Les meilleurs saveurs dans votre assiette.", "/icons/brasserie.png"],
                ["Pâtes", "Le bon goût de l’Italie dans votre assiette.", "/icons/pates.png"],
                ["Thaï Food", "Les saveurs de l’Asie en version maison.", "/icons/thai-food.png"],
                ["Salades", "Fraîcheur, croquant et gourmandise.", "/icons/salades.png"],
                ["Tex Mex", "Les gourmandises à partager... ou pas !", "/icons/tex-mex.png"],
                ["Pizzas", "Les saveurs de l'Italie à chaque bouchée.", "/icons/pizzas.png"],
                ["Smoothies", "Un concentré de douceur fruitée.", "/icons/smoothies.png"],
                ["Milkshakes", "Gourmandise givrée dans chaque gorgée.", "/icons/milkshakes.png"],
                ["Glaces", "Une pause glacée qui fait fondre les envies.", "/icon/glace.png"],
                ["Tiramisu", "Le dessert qui fait toujours l’unanimité.", "/icons/tiramisu.png"],
                ["Crêpes", "La crêpe maison qui régale à tout moment.", "/icons/crepes.png"],
                ["Cheese Cakes", "Onctueux, gourmand, absolument parfait.", "/icons/cheesecakes.png"],
              ].map(([title, desc, icon], index) => (
                <div key={index} className="flex items-center space-x-3 mt-3">
                  <img src={icon} alt={`${title} icon`} className="w-6 h-6 object-contain" />
                  <div>
                    <h4 className="font-bold text-xl text-white">{title}</h4>
                    <p className="text-sm text-white">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-25% bg-white/90 p-6 grid grid-cols-2 gap-4 overflow-auto pt-20">
            <img src="/assiets.jpg" alt="Assiette" className="w-full h-60 object-contain rounded" />
            <img src="/cake.jpg" alt="Cake" className="w-full h-60 object-contain rounded" />
            <img src="/smash.jpg" alt="Smash" className="w-full h-60 object-contain rounded" />
            <img src="/pizza.jpg" alt="Pizza" className="w-full h-60 object-contain rounded" />
          </div>
        </div>
      )}

      {/* Logo centré */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-60">
        <Link to="/">
        <div className={`rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center 
                        transition-colors duration-300 hover:translate-y-2 bg-white`}>
          <img
            src="/logo.png"
            alt="Logo"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
