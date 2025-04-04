import { useState } from "react";
import "./RPSButtons_Style.css";

type Opcion = "piedra" | "papel" | "tijera";

const imagenes: Record<Opcion, string> = {
  piedra: "/src/components/RPSButtons/RPSButtons_Media/Rock.png",
  papel: "/src/components/RPSButtons/RPSButtons_Media/Paper.png",
  tijera: "/src/components/RPSButtons/RPSButtons_Media/Scissors.png",
};

const OPCIONES: Opcion[] = ["piedra", "papel", "tijera"];

type Resultado = {
  eleccionUsuario: Opcion;
  eleccionComputadora: Opcion;
  mensaje: string;
} | null;

export default function Juego() {
  const [isThinking, setIsThinking] = useState(false);
  const [resultado, setResultado] = useState<Resultado>(null);
  const [mostrarElecciones, setMostrarElecciones] = useState(false);

  const determinarGanador = (usuario: Opcion, computadora: Opcion): string => {
    if (usuario === computadora) return "¡Es un empate!";
    if (
      (usuario === "piedra" && computadora === "tijera") ||
      (usuario === "papel" && computadora === "piedra") ||
      (usuario === "tijera" && computadora === "papel")
    )
      return "¡Ganaste!";
    return "¡Perdiste!";
  };

  const jugar = (eleccionUsuario: Opcion) => {
    setIsThinking(true);
    setMostrarElecciones(false);

    setTimeout(() => {
      const eleccionComputadora = OPCIONES[Math.floor(Math.random() * 3)];
      setResultado({
        eleccionUsuario,
        eleccionComputadora,
        mensaje: determinarGanador(eleccionUsuario, eleccionComputadora),
      });
      setMostrarElecciones(true);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <div className="rps-container">
      <div className="buttons">
        {OPCIONES.map((opcion) => (
          <button
            key={opcion}
            className={`rps-button-${opcion}`}
            onClick={() => jugar(opcion)}
            disabled={isThinking}
          >
            <img src={imagenes[opcion]} alt={opcion} className="choice-image" />
          </button>
        ))}
      </div>

      {isThinking && (
        <div className="thinking">
          <div className="loader"></div>
          <p>La computadora está eligiendo...</p>
        </div>
      )}

      {!isThinking && resultado && mostrarElecciones && (
        <div className="resultado-container">
          <div className="elecciones">
            <div className="eleccion-container">
              <div className="eleccion-usuario">
                <p>La elección del usuario es:</p>
                <img
                  src={imagenes[resultado.eleccionUsuario]}
                  alt="Tu elección"
                  className="choice-image"
                />
              </div>
            

            <div className="resultado-mensaje">
              <h2>{resultado.mensaje}</h2>
            </div>

            <div className="eleccion-computadora">
              <p>La máquina eligió:</p>
              <img
                src={imagenes[resultado.eleccionComputadora]}
                alt="Elección de la computadora"
                className="choice-image"
              />
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
