import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import PhoneImg from "../assets/whatsapp.png"; 
import MapImg from "../assets/waze.png"; 

export default function Contact() {
  const data = [
    { heure: "12", affluence: 2 },
    { heure: "13", affluence: 3 },
    { heure: "14", affluence: 5 },
    { heure: "15", affluence: 4 },
    { heure: "16", affluence: 2 },
    { heure: "17", affluence: 1 },
    { heure: "18", affluence: 2 },
    { heure: "19", affluence: 3 },
    { heure: "20", affluence: 4 },
    { heure: "21", affluence: 5 },
    { heure: "22", affluence: 4 },
    { heure: "23", affluence: 3 },
    { heure: "00", affluence: 2 },
    { heure: "01", affluence: 1 },
    { heure: "02", affluence: 0 },
  ];

  const getColor = (value) => {
    if (value <= 2) return "#4ade80"; // vert
    if (value <= 4) return "#facc15"; // jaune
    return "#ef4444"; // rouge
  };

  const horaires = [
    { day: "Lundi", time: "11:00 - 01:00" },
    { day: "Mardi", time: "11:00 - 01:00" },
    { day: "Mercredi", time: "11:00 - 01:00" },
    { day: "Jeudi", time: "11:00 - 01:00" },
    { day: "Vendredi", time: "11:00 - 01:00" },
    { day: "Samedi", time: "11:0 - 01:00" },
    { day: "Dimanche", time: "11:00 - 01:00" },
  ];

  return (
    <section className="bg-[#e8e3dc] py-12 px-4 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Partie gauche */}
        <div className="space-y-4">
          <h1 className="text-4xl font-veneer">Le Majestic Food ⚡ 🍔</h1>

          <p className="text-gray-600">
            49 Avenue de Paris - 94800 Villejuif
          </p>

          {/* Boutons */}
<div className="flex gap-4">
  <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black text-lg px-6 py-2 rounded-full shadow">
    <img src={PhoneImg} alt="Appeler" className="w-8 h-8 md:w-8 md:h-8" />
    <span className="hidden md:inline">Appeler</span>
  </button>
  <button className="flex-1 flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-500 text-black text-lg px-6 py-2 rounded-full shadow">
    <img src={MapImg} alt="Y Aller" className="w-8 h-8 md:w-8 md:h-8" />
    <span className="hidden md:inline">Y Aller</span>
  </button>
</div>

          {/* Google Maps */}
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              title="Beegee'z Café"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.4898668290296!2d1.9181!3d48.9553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e69e3e6aef6d2f%3A0x6a58a9b64a8ef2a6!2sCarrefour%20Flins!5e0!3m2!1sfr!2sfr!4v1696422000000!5m2!1sfr!2sfr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Partie droite */}
        <div className="space-y-6">
          {/* Horaires */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-veneer text-4xl mb-4">Les Horaires :</h2>
            <div className="divide-y divide-black">
              {horaires.map((h, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-2"
                >
                  <span className="text-base">{h.day}</span>
                  <span className="text-base font-bold">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Affluence */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-veneer text-4xl mb-4">L'affluence :</h2>

            <div className="flex gap-6 mb-4 text-sm">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-green-400 rounded"></span> Basse
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-400 rounded"></span> Modérée
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 bg-red-500 rounded"></span> Forte
              </span>
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="heure" />
                <Tooltip />
                <Bar
                  dataKey="affluence"
                  fill="#4ade80"
                  shape={(props) => {
                    const { x, y, width, height, value } = props;
                    return (
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={getColor(value)}
                        rx={3}
                      />
                    );
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
