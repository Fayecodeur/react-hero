import { useState, useEffect } from "react";

export default function SidesInput({ side, setSide }) {
  const [classes, setClasses] = useState([]);
  const url = "https://la-taverne.ducompagnon.fr/api/classes";

  useEffect(() => {
    fetchSides();
  }, []);

  async function fetchSides() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error : ${response.status}`);
      }
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error("Erreur..." + error);
    }
  }

  return (
    <div>
      <label htmlFor="side" className="block mb-2">
        Coté du Side
      </label>
      <select
        id="side"
        value={side}
        onChange={(e) => setSide(e.target.value)}
        className="border border-gray-500 w-full px-3 py-1 rounded-md"
      >
        <option value="">🔼 Choisissez 🔽</option>
        {classes.map((classe) => (
          <option key={classe.id} value={classe.side}>
            {classe.side}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}
