const Produit = ({ image, titre, description, prix }) => {
  return (
    <div className="max-w-[300px] rounded-2xl shadow-lg overflow-hidden bg-white mx-auto flex flex-col">
      {/* Image du produit */}
      <div className="w-full h-40 sm:h-44 overflow-hidden">
        <img 
          src={image} 
          alt={titre}
          className="w-full h-full object-cover object-top sm:object-center" 
        />
      </div>
      
      {/* Contenu texte */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3
          className="
            font-veneer 
            text-center 
            text-[clamp(1.2rem,4vw,2.2rem)] 
            leading-snug 
            mb-2 
            text-balance
          "
        >
          {titre}
        </h3>
        
        <p className="text-gray-600 text-center sm:text-left text-[clamp(0.85rem,2.5vw,1rem)] mb-2 leading-relaxed flex-1">
          {description}
        </p>
        
        <div className="text-center sm:text-left text-[clamp(1.2rem,4vw,2rem)] font-veneer font-semibold text-gray-900 mt-auto pb-2">
          {prix} €
        </div>
      </div>
    </div>
  );
};

export default Produit;
