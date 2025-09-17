import React, { useState, useRef, useEffect } from "react";
import { Trophy, User, Menu, X } from "lucide-react";

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Mettre à jour la hauteur du menu pour animation dynamique
  useEffect(() => {
    if (menuRef.current) {
      setHeight(isOpen ? menuRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8 text-green-500" />
            <h1 className="text-2xl font-bold">BetWinner Promo</h1>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#matches" className="hover:text-green-500 transition-colors">Matchs Live</a>
            <a href="#promo" className="hover:text-green-500 transition-colors">Code Promo</a>
            <a href="#about" className="hover:text-green-500 transition-colors">À propos</a>
          </nav>

          {/* Boutons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>S'inscrire</span>
            </button>

            {/* Menu burger */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile dynamique */}
        <div
          ref={menuRef}
          style={{ height: `${height}px` }}
          className="md:hidden overflow-hidden transition-[height] duration-300 ease-in-out"
        >
          <nav className="flex flex-col mt-2 space-y-2">
            <a href="#matches" className="hover:text-green-500 transition-colors">Matchs Live</a>
            <a href="#promo" className="hover:text-green-500 transition-colors">Code Promo</a>
            <a href="#about" className="hover:text-green-500 transition-colors">À propos</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

