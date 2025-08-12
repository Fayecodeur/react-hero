import { useState } from "react";

export default function Card() {
  const [attack, setAttack] = useState(10);
  return (
    <section className="py-20 container mx-auto px-6">
      <div className="flex flex-col border w-[250px] shadow rounded-md overflow-hidden ">
        {/* image */}
        <div className="size-[200px] w-full">
          <img
            src="src/assets/images/personnages/chevalier.jpg"
            className="w-full h-full object-cover duration-300 hover:scale-105 "
            alt=""
          />
        </div>
        {/* content */}
        <div className="p-3">
          {/* nom personnage */}
          <p className="text-center text-xl font-bold mb-3">Kikissan</p>
          <div className="flex flex-col space-y-2">
            {/* content */}
            <div className="flex justify-between">
              <p className="font-semibold">Santé :</p>
              <div className="flex gap-1">
                <button>🔼</button>
                <p>25 PV</p>
                <button>🔽</button>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Magie :</p>
              <div className="flex gap-1">
                <button>🔼</button>
                <p>25 PM</p>
                <button>🔽</button>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Puissance :</p>
              <div className="flex gap-1">
                <button onClick={() => setAttack(attack + 5)}>🔼</button>
                <p>{attack} ATK</p>
                <button onClick={() => setAttack(attack - 5)}>🔽</button>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6 ">
            <button className="py-2 px-4 bg-blue-500 rounded-full text-white font-bold text-center hover:bg-blue-700">
              Attacker
            </button>
            <button className="py-2 px-4 bg-orange-500 rounded-full text-white font-bold text-center hover:bg-orange-700">
              Défendre
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
