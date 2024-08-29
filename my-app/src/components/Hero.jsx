// src/Hero.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(".hero-title", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(".hero-button", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, delay: 0.5, duration: 1 });
  }, []);

  const handleJoinNow = () => {
    navigate('/join'); // Redirect to JoinPage
  };

  const handleInvest = () => {
    navigate('/investors'); // Redirect to InvestorsPage
  };

  return (
    <div className="hero-section flex items-center justify-center h-[80vh] bg-transparent overflow-hidden">
      <div className="text-center">
        <h1
          className="hero-title text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Get Funded for Your Gameplay
        </h1>
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={handleJoinNow}
            className="hero-button bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Join Now
          </button>
          <button
            onClick={handleInvest}
            className="hero-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Invest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
