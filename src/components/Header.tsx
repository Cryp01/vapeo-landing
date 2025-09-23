import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DECOY DISTRIBUTION, E.I.R.L.
            </h1>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#inicio"
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Inicio
              </a>
              <a
                href="#productos"
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Productos
              </a>
              <a
                href="#nosotros"
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Nosotros
              </a>
              <a
                href="#galeria"
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Galería
              </a>
              <a
                href="#contacto"
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contacto
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 backdrop-blur-sm rounded-lg mb-4">
              <a
                href="#inicio"
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium"
              >
                Inicio
              </a>
              <a
                href="#productos"
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium"
              >
                Productos
              </a>
              <a
                href="#nosotros"
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium"
              >
                Nosotros
              </a>
              <a
                href="#galeria"
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium"
              >
                Galería
              </a>
              <a
                href="#contacto"
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
