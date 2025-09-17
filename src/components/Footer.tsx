import React from 'react';
import { Trophy, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Trophy className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold">BetWinner Promo</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre partenaire de confiance pour les paris sportifs. 
              Profitez de nos codes promo exclusifs et de nos matchs en direct.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#matches" className="text-gray-300 hover:text-green-500 transition-colors">Matchs Live</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Codes Promo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Guide Paris</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">À propos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Confidentialité</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 space-y-2">
          <p>&copy; 2024 BetWinner Promo. Tous droits réservés. Jouez responsable. +18</p>
          <p className="flex items-center justify-center space-x-2">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <span>+237 672 298 328</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
