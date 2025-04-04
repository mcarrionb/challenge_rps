import React from "react";
import "./welcomesPage.css";
import { useNavigate } from "react-router-dom";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/form");
  };

  return (
    <div className="welcome-container">
      <div className="overlay">
        <h2 className="welcome-title">WELCOME TO</h2>
        <h1 className="game-title">ROCK, PAPER, SCISSORS</h1>
{/*         <button onClick={handleStart} className="start-button">START GAME</button>
 */}        <a className="group relative inline-block focus:ring-3 focus:outline-hidden" href="#">
          <span
            className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-violet-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
          ></span>

          <span onClick={handleStart}
            className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
          >
            START GAME
          </span>
        </a>
      </div>
    </div>

    
  );
};