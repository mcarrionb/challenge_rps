import { useState } from "react";
import { validacionName } from "./validacionInputs";

export function FormInputs() {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

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

    return ;
}