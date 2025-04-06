import { FC, ReactElement, useRef, useState } from "react";
import Webcam from "react-webcam";
import {useTranslation} from 'react-i18next';


interface FotoProps {
    handleImageUrl: (url: string) => void;

}

export const ImageWebCame: FC<FotoProps> = ({ handleImageUrl }): ReactElement => {
    const { t } = useTranslation();
    
    
    const webcamRef = useRef<Webcam | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const foto = () => {
        if (webcamRef.current) {
            const captura = webcamRef.current.getScreenshot();
            if (captura) {
                handleImageUrl(captura);
                setIsOpen(false)
            }
            // else {
            //     setImgError("Error al tomar la foto")
            // }
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} 
                className="text-input cursor-pointer flex items-left justify-left start-button-webcam">
                {t("openWebCam")}
            </button>

            {isOpen && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <Webcam
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            className="webcam-view"
                            height={500} 
                            width={500} 
                        />
                        <div className="webcam-mask"></div>
                        <div className="popup-buttons">
                            <button onClick={foto} className="border border-white rounded-md px-4 py-2 text-white cursor-pointer capture">
                                {t("capPhotoWebCam")}
                            </button>
                            <button onClick={() => setIsOpen(false)} className="border border-white rounded-md px-4 py-2 text-white cursor-pointer close">
                                {t("closeWebCam")}
                            </button>
                        </div>
                        
                    </div>
                </div>
            )}

            {/* <Webcam className="webcam-style"
                audio={false} 
                height={500} 
                ref={webcamRef} 
                screenshotFormat="image/jpeg" 
                width={500} 
            />
            <br/>
            <button onClick={foto}>Hacer captura</button> */}
        </>
    );
}