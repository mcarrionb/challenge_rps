import { useLocation } from "react-router-dom";
import {PerfilGame} from '../components/PerfilGame/PerfilGame';
import {NotiResultGame} from '../components/NotiResultGame/NotiResultGame';

export const GamePage: React.FC = () => {
    const location = useLocation();
    const { username, image, usernameEnemy, imageEnemy} = location.state || {};


    return (
        <>
        < PerfilGame username={username} image={image} enemy={false}/>
        < PerfilGame username={usernameEnemy} image={imageEnemy} enemy={true}/>

        {/* <NotiResultGame resultGame="perdedor" /> */}
        </>
    );
    
};