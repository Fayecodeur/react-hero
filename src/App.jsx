import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col h-screen grow">
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
