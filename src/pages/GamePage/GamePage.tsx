import { useLocation } from "react-router-dom";
import RPSButtons from "../../components/RPSButtons/RPSButtons";
import { PerfilGame } from "../../components/PerfilGame/PerfilGame";
import "./GamePage.css";
import { useTranslation } from "react-i18next";

export const GamePage: React.FC = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const { username, image, usernameEnemy, imageEnemy } = location.state || {};

    return (
        <div className="game-container min-h-screen w-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="game-content w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[1200px] flex flex-col items-center gap-6 md:gap-12 relative z-10">
                <div className="profiles-container w-full max-w-[800px] flex flex-row sm:flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-16">
                    <div className="w-1/2 sm:w-auto">
                        <PerfilGame username={username} image={image} enemy={false} />
                    </div>
                    <div className="w-1/2 sm:w-auto">
                        <PerfilGame username={usernameEnemy} image={imageEnemy} enemy={true} />
                    </div>
                </div>
                
                <h1 className="game-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center my-4 md:my-6">
                    {t("game")}
                </h1>

                <div className="buttons-container w-full max-w-[600px] flex justify-center">
                    <RPSButtons />
                </div>
            </div>
        </div>
    );
};