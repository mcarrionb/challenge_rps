import React, { FC, ReactElement, useRef } from "react";
import Webcam from "react-webcam";

interface FotoProps {
    setImgError: (error: string) => void,
    setImgData: (data: string) => void,
    setPreview: (data: string) => void

}

export const TomarFoto: FC<FotoProps> = ({ setImgError, setImgData, setPreview }): ReactElement => {
    const webcamRef = useRef<Webcam | null>(null);

    const foto = () => {
        if (webcamRef.current) {
            const captura = webcamRef.current.getScreenshot();
            console.log(captura);
            if (captura) {
                
                setImgData(captura);
                setPreview(captura)
            } else {
                setImgError("Error al tomar la foto")
            }
        }
    };

    return (
        <>
            <Webcam 
                audio={false} 
                height={350} 
                ref={webcamRef} 
                screenshotFormat="image/jpeg" 
                width={350} 
            />
            <br/>
            <button onClick={foto}>Hacer captura</button>
        </>
    );
}
