import {FC, ReactElement} from 'react';
import {firstUpper} from '../../utils/utilis';
import "./PerfilGame.css";


interface PerfilProps {
    username: string;
    image: string

}

export const PerfilGame: FC<PerfilProps> = ({username, image}): ReactElement => {
    username = firstUpper(username);
    return (
        <div className="ventana-perfil-jugador">
            <img src={image} alt="Perfil del jugador" className="imagen-perfil" />
            <div className="info-perfil">
                <h2>{username}</h2>
            </div>
        </div>
    );
    
};