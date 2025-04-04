import { useLocation } from "react-router-dom";
import RPSButtons from "../components/RPSButtons/RPSButtons";

export const GamePage: React.FC = () => {
    const location = useLocation();
    const { username, image } = location.state || {};
    console.log(image)

    return (
        <div className="container">
            <h1>Piedra, Papel, Tijeras!</h1>
            <RPSButtons />
        </div>
    );
    
};