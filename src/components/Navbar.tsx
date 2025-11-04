import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getAllMoods } from '../data/moods';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const moods = getAllMoods();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            MoodSync
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {moods.map((mood) => (
              <Link
                key={mood.id}
                to={`/mood/${mood.id}`}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100/50 transition-colors"
              >
                {mood.emoji} {mood.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100/50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {moods.map((mood) => (
              <Link
                key={mood.id}
                to={`/mood/${mood.id}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100/50 transition-colors"
              >
                {mood.emoji} {mood.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
