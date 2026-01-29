import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link className="hover:text-yellow-400" to="/">Home</Link>
      <Link className="hover:text-yellow-400" to="/about">About</Link>
      <Link className="hover:text-yellow-400" to="/contact">Contact</Link>
    </nav>
  )
}