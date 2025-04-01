import { FC, ReactElement, useState } from "react";
import { validarUrl } from "../validacionInputs";
import { convertToBase64 } from "../../../utils/conversorFileString";
import { TomarFoto } from "./TomarFoto";


interface ImgSelector {
    opcion: string,
    setImgError: (error: string) => void,
    setImgData: (data: string) => void
}

export const ImaginInputs: FC<ImgSelector> = ({ opcion, setImgError, setImgData}): ReactElement => {
    const [preview, setPreview] = useState<string | null>(null);

    
    const inputImgFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const ImgFile = e.target.files?.[0];
        if (ImgFile) {
            convertToBase64(ImgFile)
                .then(base64 => {
                    setImgData(base64); 
                    setPreview(base64);   
                    setImgError("");      
                })
                .catch(error => {
                    console.error(error);
                    setImgError("Error al procesar la imagen");
                    setPreview("");
                });
        } else {
            setImgError("Imagen no Valida")
            setPreview("");
        }
    }


    const inputImgUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const ImgURL = e.target.value;
        setImgData(ImgURL);
        if (!validarUrl(ImgURL)) {
            setImgError("Inserte una URL valida");
            setPreview("");
        } else {
            setImgError("");
            setPreview(ImgURL); 
        }
    }


    return (
        <div>
            {opcion === "file" && (
                <input onChange={inputImgFileChange} type="file" accept="image/*" />
            )}

            {opcion === "url" && (
                <input onChange={inputImgUrlChange} type="text" placeholder="Introduce la URL" />
            )}

            {opcion === "camera" && (
                <TomarFoto setImgError={setImgError} setImgData={setImgData} setPreview={setPreview} />
            )}


            {preview && (
                <div>
                    <p>Vista previa:</p>
                    <img src={preview} alt="Imagen seleccionada" style={{ width: "150px", height: "auto" }} />
                </div>
            )}

        </div>

        
    );
}