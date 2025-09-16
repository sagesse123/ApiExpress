import React from 'react';
import { Gift, Percent, Clock, Star, Trophy, Zap } from 'lucide-react';

export const PromoArguments: React.FC = () => {
  const promoArgs = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Code Exclusif",
      description: "BM40 est un code promo exclusif non disponible ailleurs",
      highlight: "Exclusivité garantie"
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Bonus Maximum",
      description: "Obtenez jusqu'à 130€ de bonus, le montant le plus élevé disponible",
      highlight: "130€ de bonus"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Activation Immédiate",
      description: "Votre bonus est crédité instantanément après votre premier dépôt",
      highlight: "Immédiat"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Conditions Avantageuses",
      description: "Conditions de mise réduites par rapport aux autres codes promo",
      highlight: "Conditions optimales"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Validité Étendue",
      description: "Code valable sur tous les sports et marchés de paris",
      highlight: "Tous les sports"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Support Prioritaire",
      description: "Accès au support client prioritaire avec ce code promo",
      highlight: "Support VIP"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir Notre Code Promo 
            <span className="text-green-600"> BM40</span> ?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les avantages exclusifs de notre code promo et pourquoi il surpasse tous les autres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {promoArgs.map((argument, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl mb-6 mx-auto">
                {argument.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                {argument.title}
              </h4>
              
              <p className="text-gray-600 mb-4 text-center leading-relaxed">
                {argument.description}
              </p>
              
              <div className="text-center">
                <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {argument.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border-2 border-green-200">
            <h4 className="text-3xl font-bold text-gray-900 mb-4">
              🎯 Comparaison avec les Autres Codes
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                <h5 className="font-bold text-red-800 mb-2">Autres Codes</h5>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Bonus jusqu'à 100€</li>
                  <li>• Conditions strictes</li>
                  <li>• Support standard</li>
                  <li>• Validité limitée</li>
                </ul>
              </div>
              
              <div className="text-center p-4">
                <div className="text-4xl mb-2">⚡</div>
                <h5 className="font-bold text-gray-800">VS</h5>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-xl border-2 border-green-300">
                <h5 className="font-bold text-green-800 mb-2">Notre Code BM40</h5>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Bonus jusqu'à 130€</li>
                  <li>• Conditions optimisées</li>
                  <li>• Support prioritaire</li>
                  <li>• Validité étendue</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white">
              <h5 className="text-2xl font-bold mb-2">🏆 Résultat</h5>
              <p className="text-lg">
                <strong>+30€ de bonus en plus</strong> et des conditions 50% plus avantageuses !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};