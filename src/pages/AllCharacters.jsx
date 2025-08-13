import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";

export default function AllCharacters() {
  const [characters, setCharacters] = useState([]);
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";

  useEffect(() => {
    fethCharacters();
  }, []);

  async function fethCharacters() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Erreur lors de la récupération des données ${response.status}`
        );
      }
      const data = await response.json();
      console.log(data);
      setCharacters(data);
    } catch (error) {
      console.error("Une erreur s'est produite " + error);
    }
  }

  return (
    <>
      <h1 className="text-center text-4xl font-bold">Tout les combattants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </>
  );
}
