import React, { useState } from "react";
import "./RPSButtons_Style.css"; // Importamos el CSS

const RPSButtons: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (choice: string) => {
    setLoading(true);
    setSelected(null); // Ocultamos la selección anterior

    setTimeout(() => {
      setSelected(choice);
      setLoading(false);
    }, 1500); // Simula una carga de 1.5 segundos
  };

  return (
    <div className="rps-container">
      <h2>Elige una opción:</h2>
      <div className="buttons">
        <button className="rps-button" onClick={() => handleClick("Piedra")}>
          Piedra
        </button>
        <button className="rps-button" onClick={() => handleClick("Papel")}>
          Papel
        </button>
        <button className="rps-button" onClick={() => handleClick("Tijeras")}>
          Tijeras
        </button>
      </div>

      {/* Mostramos la pantalla de carga antes del mensaje */}
      {loading && <div className="loader"></div>}

      {/* Mostramos el mensaje después de la carga */}
      {!loading && selected && (<p className="selected-text">Seleccionaste: {selected}</p>)}


    </div>
  );
};

export default RPSButtons;
