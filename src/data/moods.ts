import { Mood } from '../types/mood';

export const moods: Record<string, Mood> = {
  happy: {
    id: 'happy',
    name: 'Happy',
    emoji: '😊',
    quote: 'Happiness is contagious — spread it everywhere.',
    description: 'Celebrate joy and positivity',
    gradient: 'from-yellow-300 via-amber-300 to-orange-400',
    gradientFrom: '#fcd34d',
    gradientTo: '#fb923c',
    accentColor: 'text-yellow-600',
    songs: [
      { id: '1', title: 'Walking on Sunshine', artist: 'Katrina & The Waves', url: '#' },
      { id: '2', title: 'Good as Hell', artist: 'Lizzo', url: '#' },
      { id: '3', title: 'Don\'t Stop Me Now', artist: 'Queen', url: '#' },
      { id: '4', title: 'Levitating', artist: 'Dua Lipa', url: '#' },
      { id: '5', title: 'Here Comes the Sun', artist: 'The Beatles', url: '#' },
    ],
    tasks: [
      { id: '1', text: 'Write 3 things you\'re grateful for', emoji: '🌻' },
      { id: '2', text: 'Send a cheerful message to a friend', emoji: '💬' },
      { id: '3', text: 'Do a 1-minute happy dance', emoji: '💃' },
      { id: '4', text: 'Smile at someone today', emoji: '😄' },
      { id: '5', text: 'Share a funny video with someone', emoji: '😂' },
    ],
    animation: 'float',
  },
  energetic: {
    id: 'energetic',
    name: 'Energetic',
    emoji: '⚡',
    quote: 'Fuel your fire. Conquer your goals.',
    description: 'Feel the power and drive within you',
    gradient: 'from-red-500 via-orange-500 to-black',
    gradientFrom: '#ef4444',
    gradientTo: '#000000',
    accentColor: 'text-red-600',
    songs: [
      { id: '1', title: 'Stronger', artist: 'Kanye West', url: '#' },
      { id: '2', title: 'Eye of the Tiger', artist: 'Survivor', url: '#' },
      { id: '3', title: 'Power', artist: 'Kanye West', url: '#' },
      { id: '4', title: 'Till I Collapse', artist: 'Eminem', url: '#' },
      { id: '5', title: 'Remember the Name', artist: 'Fort Minor', url: '#' },
    ],
    tasks: [
      { id: '1', text: '10 push-ups challenge', emoji: '🏋️' },
      { id: '2', text: 'Write one short-term goal', emoji: '🎯' },
      { id: '3', text: 'Shout out your favorite power song', emoji: '🎧' },
      { id: '4', text: 'Run or sprint for 5 minutes', emoji: '🏃' },
      { id: '5', text: 'Do 20 jumping jacks', emoji: '⬆️' },
    ],
    animation: 'pulse-energy',
  },
  calm: {
    id: 'calm',
    name: 'Calm',
    emoji: '🌊',
    quote: 'Breathe in peace, breathe out stress.',
    description: 'Find serenity and inner peace',
    gradient: 'from-blue-200 via-blue-100 to-white',
    gradientFrom: '#bfdbfe',
    gradientTo: '#ffffff',
    accentColor: 'text-blue-600',
    songs: [
      { id: '1', title: 'Weightless', artist: 'Marconi Union', url: '#' },
      { id: '2', title: 'Clair de Lune', artist: 'Claude Debussy', url: '#' },
      { id: '3', title: 'Peaceful Piano', artist: 'Various', url: '#' },
      { id: '4', title: 'River Flows in You', artist: 'Yiruma', url: '#' },
      { id: '5', title: 'Ambient Meditation', artist: 'Brian Eno', url: '#' },
    ],
    tasks: [
      { id: '1', text: '2-minute breathing exercise', emoji: '🌬️' },
      { id: '2', text: 'Draw something peaceful', emoji: '🎨' },
      { id: '3', text: 'Write one thing you love about yourself', emoji: '🕊️' },
      { id: '4', text: 'Meditate for 5 minutes', emoji: '🧘' },
      { id: '5', text: 'Sip your favorite warm drink mindfully', emoji: '☕' },
    ],
    animation: 'wave',
  },
  nostalgic: {
    id: 'nostalgic',
    name: 'Nostalgic',
    emoji: '📼',
    quote: 'Old memories, timeless feelings.',
    description: 'Journey through cherished moments',
    gradient: 'from-amber-100 via-amber-50 to-orange-50',
    gradientFrom: '#fef3c7',
    gradientTo: '#fef3c7',
    accentColor: 'text-amber-700',
    songs: [
      { id: '1', title: 'Mr. Jones', artist: 'Counting Crows', url: '#' },
      { id: '2', title: 'Wonderwall', artist: 'Oasis', url: '#' },
      { id: '3', title: 'Mr. Brightside', artist: 'The Killers', url: '#' },
      { id: '4', title: 'Song 2', artist: 'Blur', url: '#' },
      { id: '5', title: 'Take Me Out', artist: 'Franz Ferdinand', url: '#' },
    ],
    tasks: [
      { id: '1', text: 'Look through old photos', emoji: '📸' },
      { id: '2', text: 'Write a childhood memory', emoji: '✍️' },
      { id: '3', text: 'Rewatch your favorite cartoon', emoji: '🍿' },
      { id: '4', text: 'Call an old friend', emoji: '☎️' },
      { id: '5', text: 'Listen to your favorite 2000s song', emoji: '🎵' },
    ],
    animation: 'flicker',
  },
  romantic: {
    id: 'romantic',
    name: 'Romantic',
    emoji: '💞',
    quote: 'Love is in every heartbeat.',
    description: 'Embrace warmth and affection',
    gradient: 'from-pink-300 via-pink-200 to-purple-300',
    gradientFrom: '#f472b6',
    gradientTo: '#d8b4fe',
    accentColor: 'text-pink-600',
    songs: [
      { id: '1', title: 'Perfect', artist: 'Ed Sheeran', url: '#' },
      { id: '2', title: 'Thinking Out Loud', artist: 'Ed Sheeran', url: '#' },
      { id: '3', title: 'Make You Feel My Love', artist: 'Adele', url: '#' },
      { id: '4', title: 'All of Me', artist: 'John Legend', url: '#' },
      { id: '5', title: 'A Thousand Years', artist: 'Christina Perri', url: '#' },
    ],
    tasks: [
      { id: '1', text: 'Write a love letter (to someone or yourself)', emoji: '💌' },
      { id: '2', text: 'Watch a romantic clip', emoji: '🎬' },
      { id: '3', text: 'Listen to a slow love song', emoji: '💗' },
      { id: '4', text: 'Send a heartfelt message to someone you care about', emoji: '💕' },
      { id: '5', text: 'Write down 5 things you love about someone special', emoji: '📝' },
    ],
    animation: 'heartbeat',
  },
  sad: {
    id: 'sad',
    name: 'Sad',
    emoji: '😔',
    quote: 'It\'s okay to feel. Healing begins with acceptance.',
    description: 'Process emotions and find solace',
    gradient: 'from-slate-600 via-slate-500 to-gray-600',
    gradientFrom: '#475569',
    gradientTo: '#4b5563',
    accentColor: 'text-slate-700',
    songs: [
      { id: '1', title: 'Someone Like You', artist: 'Adele', url: '#' },
      { id: '2', title: 'Skinny Love', artist: 'Bon Iver', url: '#' },
      { id: '3', text: 'The Scientist', artist: 'Coldplay', url: '#' },
      { id: '4', title: 'Black', artist: 'Pearl Jam', url: '#' },
      { id: '5', title: 'Hurt', artist: 'Johnny Cash', url: '#' },
    ],
    tasks: [
      { id: '1', text: 'Write what\'s on your mind', emoji: '📔' },
      { id: '2', text: 'Listen to rain sounds', emoji: '🌧️' },
      { id: '3', text: 'Hug a pillow and relax', emoji: '🤗' },
      { id: '4', text: 'Take a warm bath', emoji: '🛁' },
      { id: '5', text: 'Watch the sunset and reflect', emoji: '🌅' },
    ],
    animation: 'rain',
  },
};

export const getMoodById = (id: string): Mood | undefined => {
  return moods[id];
};

export const getAllMoods = (): Mood[] => {
  return Object.values(moods);
};

export const getRandomMood = (): Mood => {
  const moodArray = Object.values(moods);
  return moodArray[Math.floor(Math.random() * moodArray.length)];
};
