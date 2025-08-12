import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-4 shadow px-4">
      <div className="container mx-auto">
        <Link href="" className="text-xl text-gray-500">
          Combattants
        </Link>
      </div>
    </nav>
  );
}
