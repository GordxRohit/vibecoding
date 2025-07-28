import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import GameLibrary from './components/GameLibrary';
import CommunityPage from './components/CommunityPage';
import AuthPage from './components/AuthPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const handleSignIn = (userData: any) => {
    setIsAuthenticated(true);
    setUser(userData);
    setCurrentPage('home');
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'games':
        return <GameLibrary />;
      case 'community':
        return <CommunityPage />;
      case 'news':
        return <NewsPage />;
      case 'support':
        return <SupportPage />;
      case 'auth':
        return <AuthPage onSignIn={handleSignIn} onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  // Simple News Page Component
  const NewsPage = () => (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 liquid-text">
            Gaming News
          </h1>
          <p className="text-xl text-white/60 mb-8">
            Latest updates and announcements from the 3D gaming world
          </p>
          <div className="text-6xl mb-6">📰</div>
          <p className="text-white/40">News section coming soon...</p>
        </motion.div>
      </div>
    </div>
  );

  // Simple Support Page Component
  const SupportPage = () => (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 liquid-text">
            Support Center
          </h1>
          <p className="text-xl text-white/60 mb-8">
            Get help with your gaming experience
          </p>
          <div className="text-6xl mb-6">🎮</div>
          <p className="text-white/40">Support section coming soon...</p>
        </motion.div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-20 h-20 border-4 border-[var(--glass-border)] rounded-full"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-t-[var(--apple-blue)] rounded-full"></div>
          </motion.div>
          <motion.div
            className="text-3xl font-bold liquid-text mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            GameHub
          </motion.div>
          <p className="text-white/60">Initializing gaming experience...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white dark">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
        isAuthenticated={isAuthenticated}
        user={user}
        onSignOut={handleSignOut}
      />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;