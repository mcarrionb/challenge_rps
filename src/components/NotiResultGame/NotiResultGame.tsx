import {FC, ReactElement} from 'react';
import { NotiToastSuccess } from '../NotiToast/NotiToastSuccess';
import { NotiToastWarning } from '../NotiToast/NotiToastWarning';
import { NotiToastInfo } from '../NotiToast/NotiToastInfo';
import { mostrarSuccess, mostrarWarning } from '../../utils/NotiToast';


interface PerfilProps {
    resultGame: string;
}

export const NotiResultGame: FC<PerfilProps> = ({resultGame}): ReactElement => {
// ! TODO
    if (resultGame === "ganador") {
        mostrarSuccess("You Win!");
    } else if (resultGame === "perdedor") {
        mostrarWarning("You Lost!");
    } else {
        mostrarWarning("Empate");
    }


    return (
        
        <>
        {resultGame === "ganador" && <NotiToastSuccess /> }
        {resultGame === "perdedor" && <NotiToastWarning /> }
        {resultGame === "empate" && <NotiToastInfo /> }
        
        </>
    );
    
};