import Typewriter from "typewriter-effect";
import whatsappIcon from "../assets/whatsapp.png";
import wazeIcon from "../assets/waze.png";

export default function ContactSection() {
  return (
    <div className="text-black font-oswald px-6 py-12 md:px-20  relative">
      {/* Fond avec dégradé plus doux */}
      <div className="absolute inset-0 bg-[#e8e3dc]"></div>
      
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          
          {/* Colonne gauche : Horaires + Formulaire */}
          <div>
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold mb-8">Les Horaires</h2>
              
              {/* Texte avec effet machine à écrire */}
                <p className="text-3xl font-semibold text-black">
      <Typewriter
        options={{
          strings: ["Ouvert 7j/7 de 11h à 01h"],
          autoStart: true,
          loop: true,
          delay: 75, // vitesse d'écriture
        }}
      />
    </p>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h2 className="text-5xl font-bold mb-8">Nous Contacter</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-white shadow-md" 
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-white shadow-md" 
                      placeholder="Votre email"
                    />
                  </div>
                </div>

                <div>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-white shadow-md" 
                    placeholder="Votre téléphone"
                  />
                </div>

                <div>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 rounded-lg bg-white shadow-md" 
                    placeholder="Votre message"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="conditions" 
                    className="mr-2 w-5 h-5 accent-black" 
                  />
                  <label htmlFor="conditions" className="text-lg">
                    J’accepte les conditions ...
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-black text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>

          {/* Colonne droite : Adresse + boutons + carte */}
          <div className="space-y-12">
            <h2 className="text-5xl font-bold mb-6">Adresse & Contact</h2>
            <p className="mb-4 text-xl leading-relaxed">
              49 Avenue de Paris <br />
              94800 Villejuif
            </p>

            {/* Boutons avec images locales */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://wa.me/33612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-600 text-black flex items-center justify-center gap-3 py-4 rounded-full text-xl font-bold shadow-lg"
              >
                <img 
                  src={whatsappIcon} 
                  alt="Logo WhatsApp" 
                  className="w-8 h-8 object-contain" 
                />
                Appeler
              </a>
              <a
                href="https://www.waze.com/fr/live-map/directions/avenue-de-paris-49-villejuif?to=place.w.1573352.15471376.38249397"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-400 hover:bg-blue-500 text-black flex items-center justify-center gap-3 py-4 rounded-full text-xl font-bold shadow-lg"
              >
                <img 
                  src={wazeIcon}
                  alt="Logo Waze" 
                  className="w-8 h-8 object-contain" 
                />
                Let's go
              </a>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg h-[300px]">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.3687417579814!2d2.361318!3d48.792905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673d1b1a0a8a5%3A0x5a2a0a56b143f3d5!2s49%20Avenue%20de%20Paris%2C%2094800%20Villejuif!5e0!3m2!1sfr!2sfr!4v1620207169877!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
