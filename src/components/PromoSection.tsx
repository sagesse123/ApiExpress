import React from 'react';
import { CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';

interface PromoSectionProps {
  onSignUpClick: () => void;
}

export const PromoSection: React.FC<PromoSectionProps> = ({ onSignUpClick }) => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Bonus de Bienvenue",
      description: "Jusqu'à 130€ de bonus sur votre premier dépôt"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurisé & Fiable",
      description: "Plateforme certifiée avec protection des données"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cotes Compétitives",
      description: "Les meilleures cotes du marché sur tous les sports"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Support 24/7",
      description: "Équipe de support disponible en permanence"
    }
  ];

  return (
    <section id="promo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir BetWinner ?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les avantages de notre plateforme et maximisez vos gains avec notre code promo exclusif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-xl mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h4 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Commencer ?
          </h4>
          <p className="text-xl mb-8 opacity-90">
            Inscrivez-vous maintenant et utilisez le code BM40 pour votre bonus
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onSignUpClick}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-bold transition-colors duration-200"
            >
              S'inscrire Maintenant
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl text-lg font-bold transition-colors duration-200">
              En Savoir Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};