import { validacionName } from "../../utils/validacionInputs";
import {useTranslation} from 'react-i18next';


interface FormInputsProps {
    name: string;
    setName: (name: string) => void;
    error: string;
    setError: (error: string) => void;
}

export const FormInputs : React.FC<FormInputsProps> = ({ setName, setError }) => {
  const { t } = useTranslation();


    const inputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setError(validacionName(e.target.value));
    }

   

    return (
        <label className="text-input cursor-pointer flex items-center justify-center">
            <input
                type="text"
                placeholder={t("placeholderInputName")}
                onChange={inputNameChange}
                className="w-full bg-transparent border-none outline-none cursor-pointer"
            />
        </label>
    );
}