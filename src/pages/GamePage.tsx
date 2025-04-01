import { useLocation } from "react-router-dom";

export const GamePage: React.FC = () => {
    const location = useLocation();
    const { username, image } = location.state || {};

    return (
        <div>
        <h2>Hi, {username}!</h2>
        </div>
    );
    
};