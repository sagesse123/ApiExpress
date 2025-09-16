import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromoArguments } from './components/PromoArguments';
import { LiveMatches } from './components/LiveMatches';
import { PromoSection } from './components/PromoSection';
import { SignUpModal } from './components/SignUpModal';
import { Footer } from './components/Footer';

function App() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleGetCodeClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={handleSignUpClick} />
      <Hero onGetCodeClick={handleGetCodeClick} />
      <LiveMatches />
      <PromoArguments />
      <PromoSection onSignUpClick={handleSignUpClick} />
      <Footer />
      <SignUpModal isOpen={isSignUpModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;