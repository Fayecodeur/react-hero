import { useEffect, useState } from "react";

export default function ImagesInput({ image, setImage }) {
  const url = "https://la-taverne.ducompagnon.fr/api/images";
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTPS error : ${response.status}`);
      }
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Erreur..." + error);
    }
  }
  return (
    <div>
      <label htmlFor="image" className="block mb-2">
        Avatar
      </label>
      <select
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border border-gray-500 w-full px-3 py-1 rounded-md"
      >
        <option value="">🔼 Choisissez 🔽</option>
        {images.map((image, index) => (
          <option key={index} value={image.url}>
            {image.name}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}
