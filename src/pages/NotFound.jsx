import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Page 404</h1>
      <Link to={"/"}>Acceuil</Link>
    </>
  );
}
