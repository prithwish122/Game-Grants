import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const InvestorsPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(null); // 'partially' or 'complete'
  const [selectedCard, setSelectedCard] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    gsap.fromTo(".card", 
      { rotationY: 0, scale: 0.9, opacity: 0.5 }, 
      { rotationY: 360, scale: 1, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  const cards = [
    {
      gameplayLink: "https://example.com/gameplay1",
      gameName: "Game 1",
      gameId: "12345",
      steamId: "STEAM123",
      minFundingReq: "$500",
      metaMaskAddress: "0x1234567890abcdef1234567890abcdef12345678"
    },
    {
      gameplayLink: "https://example.com/gameplay2",
      gameName: "Game 2",
      gameId: "67890",
      steamId: "STEAM456",
      minFundingReq: "$1000",
      metaMaskAddress: "0xabcdef1234567890abcdef1234567890abcdef12"
    },
    {
      gameplayLink: "https://example.com/gameplay3",
      gameName: "Game 3",
      gameId: "54321",
      steamId: "STEAM789",
      minFundingReq: "$1500",
      metaMaskAddress: "0x7890abcdef1234567890abcdef1234567890abcd"
    },
  ];

  const handlePartiallyFundClick = (card) => {
    setSelectedCard(card);
    setPopupType('partially');
    setShowPopup(true);
  };

  const handleCompleteFundClick = (card) => {
    setSelectedCard(card);
    setPopupType('complete');
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
    setWalletAddress('');
    setAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log('Wallet Address:', walletAddress);
    if (popupType === 'partially') {
      console.log('Amount:', amount);
    }
    handleClosePopup();
  };

  return (
    <div className="investors-page flex flex-wrap gap-6 justify-center min-h-screen p-10">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="card w-80 h-96 perspective-1000 flex items-center justify-center"
        >
          <div className="inner-card w-full h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 rounded-lg shadow-lg transform transition-transform duration-500 hover:rotate-y-15 hover:scale-105">
            <div className="p-4 flex flex-col items-center text-white space-y-4">
              <h3 className="text-xl font-semibold">{card.gameName}</h3>
              <p><strong>Gameplay Link:</strong> <a href={card.gameplayLink} className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">{card.gameplayLink}</a></p>
              <p><strong>Game ID:</strong> {card.gameId}</p>
              <p><strong>Steam ID:</strong> {card.steamId}</p>
              <p><strong>Min Funding Req:</strong> {card.minFundingReq}</p>
              <p><strong>MetaMask Address:</strong> <span className="break-all">{card.metaMaskAddress}</span></p>
              <div className="flex gap-4 mt-auto">
                <button 
                  className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                  onClick={() => handlePartiallyFundClick(card)}
                >
                  Partially Fund
                </button>
                <button 
                  className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                  onClick={() => handleCompleteFundClick(card)}
                >
                  Complete Fund
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">
              {popupType === 'partially' ? `Partially Fund ${selectedCard?.gameName}` : `Complete Fund ${selectedCard?.gameName}`}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="walletAddress" className="block text-gray-700 mb-2">Wallet Address</label>
                <input 
                  type="text" 
                  id="walletAddress" 
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-2"
                  required 
                />
              </div>
              {popupType === 'partially' && (
                <div className="mb-4">
                  <label htmlFor="amount" className="block text-gray-700 mb-2">Amount</label>
                  <input 
                    type="number" 
                    id="amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2"
                    required 
                  />
                </div>
              )}
              <div className="flex justify-end gap-4">
                <button 
                  type="button" 
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md"
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestorsPage;
