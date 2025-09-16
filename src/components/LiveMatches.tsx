import React, { useState, useEffect } from "react";
import { Play, Clock, Users, TrendingUp } from "lucide-react";
import { Match } from "../types/api";
import { MatchService } from "../services/matchService";

interface CompetitionMatches {
  competition: string;
  matches: Match[];
}

export const LiveMatches: React.FC = () => {
  const [competitionsMatches, setCompetitionsMatches] = useState<CompetitionMatches[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const matchService = MatchService.getInstance();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const data = await matchService.getAllCompetitionsMatches();
        setCompetitionsMatches(data);
        setError(null);
      } catch (err) {
        console.error("Erreur:", err);
        setError("Erreur lors du chargement des matchs");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
    const interval = setInterval(fetchMatches, 180000); // toutes les 3 minutes
    return () => clearInterval(interval);
  }, [matchService]);

  if (loading)
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des matchs...</p>
        </div>
      </section>
    );

  if (error)
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center text-red-600">
          <p>{error}</p>
        </div>
      </section>
    );

  const renderStatus = (match: Match) => {
    if (match.time === "En cours") {
      return (
        <div className="flex flex-col items-start space-y-1">
          <div className="flex items-center space-x-2">
            <div id="live" className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-500 font-semibold text-sm">EN DIRECT</span>
          </div>
          {match.remainingTime && <span className="text-gray-500 text-xs">{match.remainingTime}</span>}
        </div>
      );
    } else if (match.time === "Terminé") {
      return (
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-gray-700" />
          <span className="text-gray-700 font-semibold text-sm">TERMINÉ</span>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-start space-y-1">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-500 font-semibold text-sm">BIENTÔT</span>
          </div>
          {match.remainingTime && <span className="text-gray-500 text-xs">{match.remainingTime}</span>}
        </div>
      );
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Matchs de Football</h3>
          <p className="text-xl text-gray-600">
            Suivez les résultats : Terminé ⚫ | En cours 🔴 | Bientôt 🟡
          </p>
        </div>

        {competitionsMatches.map((comp) => (
          <div key={comp.competition} className="mb-12">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">{comp.competition}</h4>
            <div className="flex overflow-x-auto space-x-4 pb-2">
              {comp.matches.map((match) => (
                <div
                  key={match.id}
                  className="min-w-[400px] sm:min-w-[450px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <div className="p-4">
                    {/* En-tête du match */}
                    <div className="flex items-center justify-between mb-2">
                      {renderStatus(match)}
                      {/* Afficher viewers uniquement si match en cours ou terminé */}
                      {(match.time === "En cours" || match.time === "Terminé") && (
                        <div className="flex items-center text-gray-500 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {match.viewers}
                        </div>
                      )}
                    </div>

                    {/* Score */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1 text-center">
                        <div className="font-bold text-lg text-gray-900 break-words">{match.homeTeam}</div>
                        <div className="text-2xl font-bold text-green-600">{match.homeScore}</div>
                      </div>
                      <div className="flex-shrink-0 mx-2 text-center">
                        <div className="text-gray-400 font-bold mb-1">VS</div>
                        <div className="bg-gray-900 text-white px-2 py-1 rounded-full text-sm font-semibold">
                          {match.time}
                        </div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="font-bold text-lg text-gray-900 break-words">{match.awayTeam}</div>
                        <div className="text-2xl font-bold text-green-600">{match.awayScore}</div>
                      </div>
                    </div>

                    {/* Cotes */}
                    {(match.homeOdds || match.drawOdds || match.awayOdds) && (
                      <div className="mb-2 p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-sm font-semibold text-gray-700">Cotes Live</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-center">
                          <div>
                            <div className="text-xs text-gray-500">1</div>
                            <div className="font-bold text-green-600">{match.homeOdds?.toFixed(2)}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">X</div>
                            <div className="font-bold text-green-600">{match.drawOdds?.toFixed(2)}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">2</div>
                            <div className="font-bold text-green-600">{match.awayOdds?.toFixed(2)}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Bouton inscription/parier */}
                    <a
                      href="https://bwredir.com/2ugN?p=%2Fregistration%2F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex bg-green-500 hover:bg-green-600 text-white py-2 px-2 rounded-lg font-semibold mt-2 items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>S'inscrire / Parier avec BM40</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Section promo Telegram */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg flex items-center mb-8">
          <span className="text-blue-600 font-bold mr-3">📢</span>
          <div>
            <p className="text-blue-700 font-semibold">Rejoignez notre canal de pronostics !</p>
            <a
              href="https://t.me/+up_BrMq69pgzM2Nk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              Accéder au canal Telegram
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">🔄 Mise à jour automatique toutes les 3 minutes</p>
        </div>
      </div>
    </section>
  );
};
