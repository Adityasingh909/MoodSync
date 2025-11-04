import { useState } from 'react';
import { getAllMoods, getRandomMood } from '../data/moods';
import { useNavigate } from 'react-router-dom';
import { Dices } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();
  const moods = getAllMoods();
  const [isSpinning, setIsSpinning] = useState(false);

  const handleMoodClick = (moodId: string) => {
    navigate(`/mood/${moodId}`);
  };

  const handleRandomMood = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomMood = getRandomMood();
      navigate(`/mood/${randomMood.id}`);
      setIsSpinning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center pt-12 pb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-4">
            MoodSync
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Discover music, tasks, and inspiration that match your mood
          </p>
        </div>

        {/* Mood Grid */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {moods.map((mood) => (
              <div
                key={mood.id}
                onClick={() => handleMoodClick(mood.id)}
                className="group relative cursor-pointer h-40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${mood.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                  <div className="text-5xl mb-2">{mood.emoji}</div>
                  <h3 className="text-2xl font-bold">{mood.name}</h3>
                  <p className="text-sm text-white/80 mt-1 text-center line-clamp-2">
                    {mood.description}
                  </p>
                </div>

                {/* Border glow effect on hover */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Random Mood Button */}
          <div className="flex justify-center">
            <button
              onClick={handleRandomMood}
              disabled={isSpinning}
              className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                isSpinning ? 'opacity-75' : 'hover:scale-105'
              }`}
            >
              <Dices className={isSpinning ? 'animate-spin' : ''} size={20} />
              <span>Surprise Me</span>
            </button>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
