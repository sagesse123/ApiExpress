import React from 'react';
import { Gift, Star } from 'lucide-react';

interface HeroProps {
  onGetCodeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetCodeClick }) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Utilisez notre 
            <span className="text-green-400 block mt-2">Code Promo Exclusif</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Profitez d'un bonus exceptionnel sur BetWinner avec notre code promo spécial
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-green-500/30">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-green-400 mr-3" />
              <span className="text-2xl font-bold text-green-400">CODE PROMO</span>
            </div>
            <div className="text-4xl font-mono font-bold tracking-wider mb-4 text-green-300">
              BM40
            </div>
            <div className="flex items-center justify-center text-yellow-400">
              <Star className="w-5 h-5 mr-1 fill-current" />
              <span className="font-semibold">Bonus jusqu'à 130€</span>
              <Star className="w-5 h-5 ml-1 fill-current" />
            </div>
          </div>
          
          <button 
            onClick={onGetCodeClick}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Utiliser le Code Maintenant
          </button>
        </div>
      </div>
    </section>
  );
};