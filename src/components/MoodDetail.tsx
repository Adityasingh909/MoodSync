import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMoodById } from '../data/moods';
import { ArrowLeft, Play, CheckCircle2, Music } from 'lucide-react';

export function MoodDetail() {
  const { moodId } = useParams();
  const navigate = useNavigate();
  const mood = getMoodById(moodId || '');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  if (!mood) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-600">Mood not found</p>
      </div>
    );
  }

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };

  const toggleTrack = (trackId: string) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${mood.gradient} relative overflow-hidden`}
      style={{
        background: `linear-gradient(135deg, ${mood.gradientFrom} 0%, ${mood.gradientTo} 100%)`,
      }}
    >
      {/* Animation backgrounds based on mood */}
      {mood.id === 'calm' && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/10 rounded-full animate-pulse"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `20px`,
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 15}%`,
                  animation: `wave ${3 + i * 0.5}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {mood.id === 'sad' && (
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: '4px',
                height: '4px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `fall ${2 + Math.random() * 2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      )}

      {mood.id === 'energetic' && (
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white/30 rounded-full"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `pulse-ring ${2 + i * 0.3}s ease-out infinite`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">
        {/* Header with back button */}
        <div className="flex items-center justify-between p-6 md:p-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:bg-white/20 px-4 py-2 rounded-full transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>
          <div className="text-3xl">{mood.emoji}</div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Title and Quote */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{mood.name}</h1>
            <blockquote className="text-xl md:text-2xl text-white/90 italic max-w-2xl mx-auto">
              "{mood.quote}"
            </blockquote>
          </div>

          {/* Songs Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <Music size={28} />
              Your Playlist
            </h2>
            <div className="space-y-3">
              {mood.songs.map((song) => (
                <div
                  key={song.id}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-lg p-4 transition-all duration-200 cursor-pointer group"
                  onClick={() => toggleTrack(song.id)}
                >
                  <div className="flex items-center gap-4">
                    <button className="flex-shrink-0 w-10 h-10 bg-white/30 group-hover:bg-white/50 rounded-full flex items-center justify-center transition-colors duration-200">
                      <Play
                        size={20}
                        className={`text-white ${playingTrack === song.id ? 'fill-white' : ''}`}
                      />
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold truncate">{song.title}</p>
                      <p className="text-white/70 text-sm truncate">{song.artist}</p>
                    </div>
                    {playingTrack === song.id && (
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-white/80 rounded-full animate-pulse"></div>
                        <div className="w-1 h-6 bg-white/80 rounded-full animate-pulse animation-delay-100"></div>
                        <div className="w-1 h-4 bg-white/80 rounded-full animate-pulse animation-delay-200"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Today's Activities</h2>
            <div className="space-y-3">
              {mood.tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-lg p-4 transition-all duration-200 cursor-pointer group flex items-center gap-4"
                >
                  <button
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      completedTasks.includes(task.id)
                        ? 'bg-white border-white'
                        : 'border-white/60 hover:border-white'
                    }`}
                  >
                    {completedTasks.includes(task.id) && (
                      <CheckCircle2 size={20} className="text-current" />
                    )}
                  </button>
                  <span
                    className={`text-lg font-medium ${
                      completedTasks.includes(task.id)
                        ? 'text-white/60 line-through'
                        : 'text-white'
                    }`}
                  >
                    {task.text}
                  </span>
                  <span className="ml-auto text-2xl">{task.emoji}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="text-center text-white/80">
            <p className="text-sm mb-2">
              {completedTasks.length} of {mood.tasks.length} activities completed
            </p>
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden max-w-md mx-auto">
              <div
                className="bg-white/80 h-full transition-all duration-300 rounded-full"
                style={{ width: `${(completedTasks.length / mood.tasks.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fall {
          0% {
            transform: translateY(-10vh) translateX(0);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(50px);
            opacity: 0;
          }
        }
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}
