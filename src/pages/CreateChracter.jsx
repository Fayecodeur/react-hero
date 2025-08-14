import { useState } from "react";

export default function CreateChracter() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [health, setHealth] = useState("");
  const [magic, setMagic] = useState("");
  const [side, setSide] = useState("");
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-3">
        Ajouter un personnage
      </h1>
      <form className="max-w-[500px] mx-auto p-4 shadow-md space-y-3">
        <div>
          <label htmlFor="name" className="block mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-500 w-full px-3 py-1 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="avatar" className="block mb-2">
            Avatar
          </label>
          <input
            type="text"
            id="avatar"
            className="border border-gray-500 w-full px-3 py-1 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="sante" className="block mb-2">
            Santé
          </label>
          <input
            type="number"
            id="sante"
            className="border border-gray-500 w-full px-3 py-1 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="magie" className="block mb-2">
            Magie
          </label>
          <input
            type="number"
            id="magie"
            className="border border-gray-500 w-full px-3 py-1 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="puissance" className="block mb-2">
            Puissance
          </label>
          <input
            type="number"
            id="puissance"
            className="border border-gray-500 w-full px-3 py-1 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="side" className="block mb-2">
            Coté de la force
          </label>
          <input
            type="text"
            id="side"
            className="border border-gray-500 w-full px-3 py-1 rounded-md"
          />
        </div>
        <button className="mt-3 bg-blue-500 text-white font-bold px-3 py-2 w-full rounded-md">
          Créer le personnage
        </button>
      </form>
    </div>
  );
}
