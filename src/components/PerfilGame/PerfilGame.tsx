import {FC, ReactElement} from 'react';
import {firstUpper} from '../../utils/utilis';
import "./PerfilGame.css";


interface PerfilProps {
    username: string;
    image: string;
    enemy: boolean;
}

export const PerfilGame: FC<PerfilProps> = ({username, image, enemy}): ReactElement => {
    username = firstUpper(username);
    return (
        <div className={enemy ? "ventana-perfil-jugador ventana-perfil-jugador-E" : "ventana-perfil-jugador ventana-perfil-jugador-U"}>
            <img src={image} alt="Perfil del jugador" className="imagen-perfil" />
            <div className="info-perfil">
                <h2>{username}</h2>
            </div>
        </div>
    );
    
};