import {FC, ReactElement} from 'react';
import {firstUpper} from '../../utils/utilis';
import "./PerfilGame.css";
import { useTranslation } from 'react-i18next';


interface PerfilProps {
    username: string;
    image: string;
    enemy: boolean;
}

export const PerfilGame: FC<PerfilProps> = ({username, image, enemy}): ReactElement => {
    username = firstUpper(username);
    const { t } = useTranslation();
    
    return (
        <div className={`ventana-perfil-jugador ${enemy ? "ventana-perfil-jugador-E" : "ventana-perfil-jugador-U"} 
            flex items-center gap-6 min-w-[280px] p-6 rounded-2xl backdrop-blur-md
            border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.05)]
            transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),inset_0_0_20px_rgba(255,255,255,0.1)]`}>
            <div className="relative shrink-0">
                <img 
                    src={image} 
                    alt={`Perfil de ${username}`} 
                    className="imagen-perfil w-[70px] h-[70px] rounded-full object-cover
                        border-2 border-[#7786f7] outline outline-2 outline-offset-8 outline-[#7786f7]/30
                        shadow-[0_0_15px_rgba(119,134,247,0.3),inset_0_0_10px_rgba(119,134,247,0.2)]
                        transition-all duration-300 group-hover:scale-105"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/70";
                    }}
                />
            </div>
            <div className="info-perfil min-w-0 flex-1">
                <h2 className="text-2xl font-semibold m-0 truncate bg-gradient-to-r from-white to-indigo-300 
                    bg-clip-text text-transparent dark:from-gray-100 dark:to-purple-500">
                    {username}
                </h2>
                <span className="text-sm text-gray-300 dark:text-gray-400">
                    {enemy ? t("oponent") : t("your")}
                </span>
            </div>
        </div>
    );
};