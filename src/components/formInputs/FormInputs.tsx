import { FC, ReactElement, useState } from "react";
import { validacionName } from "./validacionInputs";
import { ImaginInputs } from "./OtrosInpust/ImagenInputs";

export const FormInputs: FC = (): ReactElement => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [opcionImg, setOpcionImg] = useState<string>("file");
    const [imgError, setImgError] = useState<string>("");
    const [imgData, setImgData] = useState<string>("");



    const inputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setError(validacionName(e.target.value));
    }

    const inputNameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validacion: string = validacionName(name)
        if (validacion) {
            setError(validacion);
            return;
        }
        if (imgError) {
            console.log("Error en la imagen:", imgError);
            return;
        }
        const userData = {
            name,
            image: imgData, 
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("Datos guardados:", userData);
    }

    const inputOpcionImgChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setImgError("");
        setOpcionImg(e.target.value);
    }

    return <form onSubmit={inputNameSubmit}>
        <div>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={inputNameChange}
                placeholder="Inserte tu Nombre"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <h3>Seleccionar Imagen</h3>
        <select onChange={inputOpcionImgChange} value={opcionImg}>
            <option value="file">Subir imagen</option>
            <option value="url">Insertar URL</option>
            <option value="camera">Tomar foto</option>
        </select>

        <ImaginInputs opcion={opcionImg} setImgError={setImgError} setImgData={setImgData}/>
        {imgError && <p style={{ color: "red" }}>{imgError}</p>}

        <button type="submit">Enviar</button>
    </form>
    ;
}