import { useLocation } from "react-router-dom";
import RPSButtons from "../../components/RPSButtons/RPSButtons";
import { PerfilGame } from "../../components/PerfilGame/PerfilGame";
import "./GamePage.css";

export const GamePage: React.FC = () => {
    const location = useLocation();
    const { username, image, usernameEnemy, imageEnemy } = location.state || {};

    return (
        <div className="game-container">
            <div className="game-content">
                <PerfilGame username={username} image={image} enemy={false} />
                <PerfilGame username={usernameEnemy} image={imageEnemy} enemy={true} />
                <h1 className="game-title">
                    Piedra, Papel, Tijeras!
                </h1>
                <div className="buttons-container">
                    <RPSButtons />
                </div>
            </div>
        </div>
    );
};