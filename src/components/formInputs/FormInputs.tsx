import { useState } from "react";
import { validacionName } from "./validacionInputs";


interface FormInputsProps {
    name: string;
    setName: (name: string) => void;
    error: string;
    setError: (error: string) => void;
}

export const FormInputs : React.FC<FormInputsProps> = ({ name, setName, error, setError }) => {
/*     const [name, setName] = useState("");
    const [error, setError] = useState(""); */

    const inputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setError(validacionName(e.target.value));
    }

    const inputNameSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        const validacion: string = validacionName(name)
        if (validacion) {
            setError(validacion);    
            return;        
        }
        console.log("Datos -> ", name) 
    }

    return (
        <div>
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={inputNameChange}
            className="text-input"
        />
          {error && <p className="error-message">{error}</p>}
        </div>
    );
}