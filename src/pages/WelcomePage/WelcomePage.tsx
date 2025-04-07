import React from "react";
import "./welcomesPage.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handlePlay = () => {
    navigate("/form");
  };

  return (
    <div className="welcome-container flex items-center justify-center min-h-screen w-full p-4">
      <div className="welcome-content rounded-xl px-6 sm:px-12 md:px-24 py-8 sm:py-12 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[600px]">
        <h2 className="welcome-title text-xl sm:text-2xl font-normal m-0">{t("welcomeTo")}</h2>
        <h1 className="game-title text-3xl sm:text-4xl font-bold my-3 sm:my-4 mb-6 sm:mb-8">
          {t("gameTitle1")}
          <br />
          {t("gameTitle2")}
        </h1>
        <button 
          onClick={handlePlay} 
          className="play-button text-base sm:text-lg font-semibold px-8 sm:px-16 py-3 sm:py-4 rounded-xl w-full sm:w-auto"
        >
          {t("buttonStart")}
        </button>
      </div>
    </div>
  );
};