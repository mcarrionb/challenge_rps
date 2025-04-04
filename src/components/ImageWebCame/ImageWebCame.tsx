import { FC, ReactElement, useRef, useState } from "react";
import Webcam from "react-webcam";
// import "./WebcamPopup.css";


interface FotoProps {
    handleImageUrl: (url: string) => void;

}

export const ImageWebCame: FC<FotoProps> = ({ handleImageUrl }): ReactElement => {
    const webcamRef = useRef<Webcam | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const foto = () => {
        if (webcamRef.current) {
            const captura = webcamRef.current.getScreenshot();
            console.log(captura);
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
            <button onClick={() => setIsOpen(true)} className="start-game-button start-button-webcam ">
                Abrir Webcam
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
                            <button onClick={foto} className="start-game-button capture">
                                Tomar Foto
                            </button>
                            <button onClick={() => setIsOpen(false)} className="start-game-button close">
                                Cerrar
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