// Mock data
import Burger from "../../assets/Menu/Burger.png";
import Milkshakes from "../../assets/Menu/Milkshake.png";
import Smoothie from "../../assets/Menu/Smoothie.png";
import Tacos from "../../assets/Menu/Tacos.png";
import Smash from "../../assets/Menu/Smash.png";
import Sandwichs from "../../assets/Menu/Sandwichs.png";
import TexMex from "../../assets/Menu/TexMex.png";
import Tarte from "../../assets/Menu/Tarte.png";
import Tiramisu from "../../assets/Menu/Tiramisu.png";
import Glaces from "../../assets/Menu/Glaces.png";


export const menuCategories = [
  {
    id: "plats-brasseries",
    name: "Plats Brasseries",
    description: "PLATS BRASSERIES",
    image: "https://cdn.prod.website-files.com/66ffa6e40ee59c79be77e19e/672a6d96f1d2da292205c3f8_BGZ%20-%20BRASSERIE%20-%20PIECE%20DU%20BOUCHER%20FINAL.avif",
    items: [
      { name: "Pièce du Boucher", price: "18€", description: "Steak grillé avec légumes de saison" },
      { name: "Côte de Bœuf", price: "22€", description: "Côte de bœuf aux herbes fraîches" }
    ]
  },
  {
    id: "plats-thailandais",
    name: "Plats Thaïlandais",
    description: "PLATS THAÏLANDAIS",
    image: "https://cdn.prod.website-files.com/66ffa6e40ee59c79be77e19e/672a6e1a970f0ee82ce55076_BGZ%20-%20THAI%20-%20PAD%20THAI%20BOEUF.avif",
    items: [
      { name: "Pad Thaï Bœuf", price: "15€", description: "Nouilles sautées au bœuf, sauce traditionnelle" },
      { name: "Curry Rouge", price: "14€", description: "Curry rouge au lait de coco et basilic thaï" }
    ]
  },
  {
    id: "salades",
    name: "Salades",
    description: "SALADES",
    image: "https://cdn.prod.website-files.com/66ffa6e40ee59c79be77e19e/672a6ded1a89b26d77761754_BGZ%20-%20SALADE%20-%20CHEVRE%20MIEL.avif",
    items: [
      { name: "Salade Chèvre Miel", price: "12€", description: "Salade verte, chèvre chaud, miel, noix" },
      { name: "Salade César", price: "11€", description: "Salade romaine, poulet grillé, parmesan" }
    ]
  },
  {
    id: "tacos",
    name: "Tacos",
    description: "TACOS",
    image: Tacos,
    items: [
      { name: "Pâtes Bolognaise", price: "13€", description: "Tagliatelles à la sauce bolognaise maison" },
      { name: "Carbonara", price: "14€", description: "Spaghettis carbonara à l'italienne" }
    ]
  },
  {
    id: "burgers-classiques",
    name: "Burgers Classiques",
    description: "BURGERS CLASSIQUES",
    image: Burger,
    items: [
      { name: "Tender Bacon", price: "16€", description: "Burger au poulet tendre et bacon croustillant" },
      { name: "Classic Beef", price: "15€", description: "Burger de bœuf 180g, cheddar, sauce maison" }
    ]
  },
  {
    id: "burgers-smashs",
    name: "Burgers Smashs",
    description: "BURGERS SMASHS",
    image: Smash,
    items: [
      { name: "Smash Chèvre Miel", price: "17€", description: "Double smash, chèvre, miel, roquette" },
      { name: "Triple Smash", price: "19€", description: "Triple smash beef, triple fromage" }
    ]
  },
  {
    id: "sandwichs",
    name: "Sandwichs Maison",
    description: "SANDWICHS",
    image: Sandwichs,
    items: [
      { name: "Buffalo Chicken", price: "12€", description: "Sandwich au poulet buffalo, salade, tomate" },
      { name: "Club House", price: "13€", description: "Triple sandwich club house maison" }
    ]
  },
  {
    id: "tex-mex",
    name: "TEX MEX",
    description: "TEX MEX",
    image: TexMex,
    items: [
      { name: "Mozzarella Sticks", price: "8€", description: "Bâtonnets de mozzarella panés, sauce ranch" },
      { name: "Quesadilla", price: "11€", description: "Tortilla au fromage, guacamole maison" }
    ]
  },

  {
    id: "smoothies",
    name: "Smoothies",
    description: "SMOOTHIES",
    image: Smoothie,
    items: [
      { 
        name: "Smoothie Fraise", 
        price: "5.50€", 
        description: "Smoothie fraise banane, lait d'amande bio",
        image: "https://images.unsplash.com/photo-1553530979-67ca4ac70ad6?w=400&h=400&fit=crop&crop=center"
      },
      { 
        name: "Green Smoothie", 
        price: "6€", 
        description: "Épinards, pomme verte, citron vert, gingembre",
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop&crop=center"
      },
      { 
        name: "Smoothie Mangue", 
        price: "5.50€", 
        description: "Mangue fraîche, orange, passion",
        image: "https://images.unsplash.com/photo-1623065422902-4076b0842bbe?w=400&h=400&fit=crop&crop=center"
      },
      { 
        name: "Berry Mix", 
        price: "6.50€", 
        description: "Mélange de fruits rouges, myrtilles, framboises",
        image: "https://images.unsplash.com/photo-1619096542031-6e5496d2c1d6?w=400&h=400&fit=crop&crop=center"
      },
      { 
        name: "Tropical Paradise", 
        price: "6€", 
        description: "Ananas, coco, banane, citron vert",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop&crop=center"
      }
    ]
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    description: "MILKSHAKES",
    image: Milkshakes,
    items: [
      { name: "Milkshake Fraise", price: "7€", description: "Milkshake à la fraise, chantilly maison" },
      { name: "Milkshake Vanille", price: "7€", description: "Milkshake vanille bourbon, caramel" }
    ]
  },
  {
    id: "Tarte aux Daim",
    name: "Tarte aux Daim",
    description: "Tarte aux Daim",
    image: Tarte,
    items: [
      { name: "Cheese Cake Snickers", price: "8€", description: "Cheese cake au Snickers, coulis caramel" },
      { name: "Cheese Cake Fraise", price: "8€", description: "Cheese cake aux fraises fraîches" }
    ]
  },

  {
    id: "tiramisus",
    name: "Tiramisus",
    description: "TIRAMISU",
    image: Tiramisu,
    items: [
      { name: "Tiramisu Mangue", price: "7€", description: "Tiramisu à la mangue fraîche" },
      { name: "Tiramisu Classique", price: "7€", description: "Tiramisu traditionnel italien" }
    ]
  },
  {
    id: "glaces",
    name: "Glaces",
    description: "GLACES",
    image: Glaces,
    items: [
      { name: "Glace Fraise", price: "5€", description: "Glace artisanale à la fraise" },
      { name: "Coupe Glacée", price: "8€", description: "Trois boules, fruits frais, chantilly" }
    ]
  }
];

export const restaurantInfo = {
  name: "Beegee'z Café",
  phone: "06.66.73.71.19",
  address: "Centre Commercial Carrefour, Route Renault, 78410 Flins-sur-Seine",
  hours: {
    "Lundi": "11:30 - 00:00",
    "Mardi": "11:30 - 00:00",
    "Mercredi": "11:30 - 00:00",
    "Jeudi": "11:30 - 00:00",
    "Vendredi": "14:00 - 02:00",
    "Samedi": "11:30 - 02:00",
    "Dimanche": "11:30 - 00:00"
  },
  socialMedia: {
    instagram: "@beegeez_cafe",
    facebook: "@beegeezcafe",
    snapchat: "@beegeez78",
    tiktok: "@beegeez78"
  },
  googleRating: "4,5/5",
  googleReviews: "1 171 Avis"
};