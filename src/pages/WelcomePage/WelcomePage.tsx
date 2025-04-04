import React from "react";
import "./welcomesPage.css";
import { useNavigate } from "react-router-dom";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/form");
  };

  return (
    <div className="rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 welcome-container">
      <div className="overlay">
        <h2 className="welcome-title">WELCOME TO</h2>
        <h1 className="game-title">ROCK, PAPER, SCISSORS</h1>
        <button onClick={handleStart} className="start-button">START GAME</button>
      </div>
    </div>

    
  );
};