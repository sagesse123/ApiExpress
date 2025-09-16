import React from 'react';
import { Trophy, User, Menu } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8 text-green-500" />
            <h1 className="text-2xl font-bold">BetWinner Promo</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#matches" className="hover:text-green-500 transition-colors">Matchs Live</a>
            <a href="#promo" className="hover:text-green-500 transition-colors">Code Promo</a>
            <a href="#about" className="hover:text-green-500 transition-colors">À propos</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={onLoginClick}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>S'inscrire</span>
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};