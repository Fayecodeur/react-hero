import { useState } from "react";
import SidesInput from "../components/formComponents/SidesInput.jsx";
import ImagesInput from "../components/formComponents/ImagesInput.jsx";
import GenericInput from "../components/formComponents/GenericInput.jsx";

export default function CreateChracter() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [health, setHealth] = useState("");
  const [magic, setMagic] = useState("");
  const [power, setPower] = useState("");
  const [side, setSide] = useState("");

  function handleSubmbit(e) {
    e.preventDefault();

    const newCharacters = {
      name,
      image,
      health: parseInt(health),
      magic: parseInt(magic),
      power: parseInt(power),
      side,
    };

    setName("");
    setImage("");
    setHealth("");
    setMagic("");
    setPower("");
    setSide("");

    console.log(newCharacters);
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-3">
        Ajouter un personnage
      </h1>
      <form
        onSubmit={handleSubmbit}
        className="max-w-[500px] mx-auto p-4 shadow-md space-y-3"
      >
        <GenericInput
          constante={name}
          callback={setName}
          title="Nom"
          type="text"
        />
        <ImagesInput image={image} setImage={setImage} />

        <GenericInput
          constante={health}
          callback={setHealth}
          title="Santé"
          type="number"
        />
        <GenericInput
          constante={magic}
          callback={setMagic}
          title="Magie"
          type="number"
        />

        <GenericInput
          constante={power}
          callback={setPower}
          title="Puissance"
          type="number"
        />

        <SidesInput side={side} setSide={setSide} />
        <button className="mt-3 bg-blue-500 text-white font-bold px-3 py-2 w-full rounded-md">
          Créer le personnage
        </button>
      </form>
    </div>
  );
}
