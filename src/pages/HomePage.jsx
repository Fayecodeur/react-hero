import Card from "../components/Card.jsx";

export default function HomePage() {
  const allCharacters = [
    {
      name: "Chevalier",
      image: "chevalier.jpg",
      health: 50,
      magic: 45,
      power: 100,
    },
    {
      name: "Sorcier",
      image: "sorcier.jpg",
      health: 80,
      magic: 100,
      power: 90,
    },
  ];
  return (
    <div className=" flex flex-wrap justify-center gap-4">
      {allCharacters.map((character, index) => (
        <Card key={index} character={character} />
      ))}
    </div>
  );
}
