import React from 'react';
import { useTranslation } from 'react-i18next';
import './SelectorLenguaje.css';

export const SelectorLenguaje: React.FC = () => {
  const { i18n } = useTranslation();

  const cambiarLenguaje = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lng: string = e.target.value;
    i18n.changeLanguage(lng);
  };

  return (
    <div className='language-selector'>
      <span className="language-icon">🌐</span>
      <select
      className="language-select dark:text-white"
        value={i18n.language}
        onChange={cambiarLenguaje}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
         <option value="ca">Català</option>
      </select>
    </div>
  );
};