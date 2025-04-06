import React from "react";
import "./welcomesPage.css";
import { useNavigate } from "react-router-dom";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/form");
  };

  return (
    <div className="welcome-container flex items-center justify-center min-h-screen w-full">
      <div className="welcome-content rounded-xl px-24 py-12">
        <h2 className="welcome-title text-2xl font-normal m-0">WELCOME TO</h2>
        <h1 className="game-title text-4xl font-bold my-4 mb-8">
          ROCK, PAPER,
          <br />
          SCISSORS
        </h1>
        <button 
          onClick={handlePlay} 
          className="play-button text-lg font-semibold px-16 py-4 rounded-xl"
        >
          PLAY
        </button>
      </div>
    </div>
  );
};