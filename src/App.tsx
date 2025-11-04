import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { MoodDetail } from './components/MoodDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood/:moodId" element={<MoodDetail />} />
        </Routes>
      </main>
      <footer className="bg-slate-900/50 text-white text-center py-6 mt-12">
        <p className="text-sm">© 2025 MoodSync. Discover your vibe.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
