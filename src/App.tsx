import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="min-h-screen bg-white">
        <div className="fixed top-0 left-0 right-0 z-50">
          <SocialBar />
          <Navbar />
        </div>
        <div className="pt-[120px]"> {/* Ajout d'un padding-top pour compenser la hauteur du header */}
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;