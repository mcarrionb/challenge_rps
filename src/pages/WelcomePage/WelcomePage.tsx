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
    <div className="welcome-container flex items-center justify-center min-h-screen w-full">
      <div className="welcome-content rounded-xl px-24 py-12">
        <h2 className="welcome-title text-2xl font-normal m-0">{t("welcomeTo")}</h2>
        <h1 className="game-title text-4xl font-bold my-4 mb-8">
          {t("gameTitle1")}
          <br />
          {t("gameTitle2")}
        </h1>
        <button 
          onClick={handlePlay} 
          className="play-button text-lg font-semibold px-16 py-4 rounded-xl"
        >
          {t("buttonStart")}
        </button>
      </div>
    </div>
  );
};