import Statistique from "./Statistique.jsx";

export default function Card({ character }) {
  const allStats = [
    { stat: "Santé", value: character.health, unit: "PV" },
    { stat: "Magie", value: character.magic, unit: "PM" },
    { stat: "Puissance", value: character.power, unit: "ATK" },
  ];

  return (
    <div className="flex flex-col border w-[250px] shadow rounded-md overflow-hidden">
      {/* image */}
      <div className="h-[200px] w-full">
        <img
          src={`src/assets/images/personnages/${character.image}`}
          className="w-full h-full object-cover duration-300 hover:scale-105"
          alt={character.name}
        />
      </div>

      {/* content */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        {/* nom personnage */}
        <p className="text-center text-xl font-bold mb-3">{character.name}</p>

        {/* statistiques */}
        <div className="flex flex-col space-y-2">
          {allStats.map((stats, index) => (
            <Statistique
              key={index}
              stat={stats.stat}
              value={stats.value}
              unit={stats.unit}
            />
          ))}
        </div>

        {/* boutons */}
        <div className="flex justify-between mt-4">
          <button className="py-2 px-4 bg-blue-500 rounded-full text-white font-bold text-center hover:bg-blue-700">
            Attaquer
          </button>
          <button className="py-2 px-4 bg-orange-500 rounded-full text-white font-bold text-center hover:bg-orange-700">
            Défendre
          </button>
        </div>
      </div>
    </div>
  );
}
