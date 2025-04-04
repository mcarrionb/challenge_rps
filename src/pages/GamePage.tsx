import { useLocation } from "react-router-dom";
import {PerfilGame} from '../components/PerfilGame/PerfilGame';
import {NotiResultGame} from '../components/NotiResultGame/NotiResultGame';

export const GamePage: React.FC = () => {
    const location = useLocation();
    const { username, image } = location.state || {};


    return (
        <>
        < PerfilGame username={username} image={image}/>
        {/* <NotiResultGame resultGame="perdedor" /> */}
        </>
    );
    
};