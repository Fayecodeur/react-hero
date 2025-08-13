import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "Acceuil", path: "/" },
    { name: "Combattants", path: "/personnages" },
  ];
  return (
    <nav className="py-4 shadow px-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl text-gray-500">
          La taverne
        </Link>
        <div className="flex gap-3">
          {links.map((link, index) => (
            <NavLink
              to={link.path}
              key={index}
              className={({ isActive }) =>
                `${isActive ? "font-bold underline" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
