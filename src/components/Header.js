import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
  <header className="text-gray-700 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-teal-500">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img
          src={logo}
          className="w-14 h-16 text-white p-2"
          alt="Fernando Romero"
        />
        <span className="ml-3 text-xl">Fernando Romero</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/" className="mr-5 hover:text-gray-900">Inicio</Link>
        <Link to="/trayectoria" className="mr-5 hover:text-gray-900">Trayectoria</Link>
        <Link to="/cursos" className="mr-5 hover:text-gray-900">Cursos</Link>
        <Link to="/contacto" className="mr-5 hover:text-gray-900">Contacto</Link>
      </nav>
      <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
        Botoncito
      </button>
    </div>
  </header>
  );
}
