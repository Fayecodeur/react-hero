import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
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
    <>
      <Navbar />
      <main className="container mx-auto px-6 py-10">
        <div className=" flex flex-wrap justify-center gap-4">
          {allCharacters.map((character, index) => (
            <Card key={index} character={character} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
