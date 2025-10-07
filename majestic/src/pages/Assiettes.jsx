import HeroSalade from '../assets/Carte/Assiettes/couvertureAssiettes.jpeg';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Produit from '../components/Produit';
import Boeuf from '../assets/Carte/Assiettes/Boeuf.png';
import Poulet from '../assets/Carte/Assiettes/Poulet.png';
import Kebab from '../assets/Carte/Assiettes/Kebab.png';
import Piece from '../assets/Carte/Assiettes/Piece.png';
import { Pie } from 'recharts';

const Assiettes = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Section Hero */}
            <div className="relative h-[350px] md:h-[500px] lg:h-[570px] pt-16 md:pt-20 lg:pt-24">
                {/* Image de fond */}
                <img
                    src={HeroSalade}
                    alt="Hero"
                    className="w-full h-full object-cover object-[75%] md:scale-100 transition-transform duration-500"
                />

                {/* Overlay sombre uniquement sur mobile */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent md:from-transparent"></div>

                {/* Contenu */}
                <div className="absolute inset-0 flex flex-col justify-start mt-28 md:mt-40 space-y-4">

                    {/* Bouton retour */}
                    <div className="w-full flex justify-start px-4 sm:pl-24">
                        <Link
                            to="/la-carte"
                            className="flex items-center text-white border border-white px-3 py-2 rounded-md hover:bg-white/20 transition text-lg md:text-xl font-semibold"
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                            <span className="hidden sm:inline-flex ml-2">Retour</span>
                        </Link>
                    </div>

                    {/* Fil d’Ariane - caché sur mobile */}
                    <nav className="hidden sm:flex text-white text-sm md:text-base sm:pl-24 space-x-2">
                        <Link to="/" className="hover:underline">Accueil</Link>
                        <span>›</span>
                        <Link to="/carte" className="hover:underline">La Carte</Link>
                        <span>›</span>
                        <span>Brasserie</span>
                    </nav>

                    {/* Titre */}
                    <h1 className="text-white text-5xl md:text-[80px] leading-snug text-center sm:text-left font-veneer px-4 sm:pl-8 md:pl-24">
    Brasserie
</h1>

                </div>
            </div>
                <div className="bg-[#EDE8E4] py-12 px-4 md:px-24">
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-12">
    <Produit
      image={Kebab}
      titre="Assiette Kebab"
      description="Salade Melange, Frites Maison, Viande Kebab, Sauce Blanche, Sauce Frites (Au Choix)"
      prix="11.90"
    />
    <Produit
      image={Poulet}
      titre="Assiette Brochette de Poulet"
      description="Salade Melange, Frites Maison, Brochette de Poulet, Sauce Blanche, Sauce Frites (Au Choix)"
      prix="14.90"
    />
        <Produit
      image={Boeuf}
      titre="Assiette Brochette de Boeuf"
      description="Salade Melange, Frites Maison, Brochette de Boeuf, Sauce Blanche, Sauce Frites (Au Choix)"
      prix="14.90"
    />
            <Produit
      image={Piece}
      titre="Assiette Brochette de Boeuf"
      description="Salade Melange, Frites Maison, Piece de Boeuf, Sauce Blanche, Sauce Frites (Au Choix)"
      prix="14.90"
    />
  </div>
</div>

        </section>
    );
};

export default Assiettes;
