export type MoodType = 'happy' | 'energetic' | 'calm' | 'nostalgic' | 'romantic' | 'sad';

export interface Song {
  id: string;
  title: string;
  artist: string;
  url: string;
}

export interface Task {
  id: string;
  text: string;
  emoji: string;
}

export interface Mood {
  id: MoodType;
  name: string;
  emoji: string;
  quote: string;
  description: string;
  gradient: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  songs: Song[];
  tasks: Task[];
  animation: string;
}
