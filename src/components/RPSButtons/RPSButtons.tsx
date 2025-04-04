import { useState } from "react";
import "./RPSButtons_Style.css";

type Opcion = "piedra" | "papel" | "tijera";

const imagenes: Record<Opcion, string> = {
  piedra: "/src/components/RPSButtons/RPSButtons_Media/Rock.png",
  papel: "/src/components/RPSButtons/RPSButtons_Media/Paper.png",
  tijera: "/src/components/RPSButtons/RPSButtons_Media/Scissors.png",
};

const OPCIONES: Opcion[] = ["piedra", "papel", "tijera"];

export default function Juego() {
  const [isThinking, setIsThinking] = useState(false);
  const [eleccionUsuario, setEleccionUsuario] = useState<Opcion | null>(null);
  const [eleccionComputadora, setEleccionComputadora] = useState<Opcion | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [victoriasUsuario, setVictoriasUsuario] = useState(0);
  const [victoriasComputadora, setVictoriasComputadora] = useState(0);

  const determinarGanador = (usuario: Opcion, computadora: Opcion): string => {
    if (usuario === computadora) return "¡Empate!";
    if (
      (usuario === "piedra" && computadora === "tijera") ||
      (usuario === "papel" && computadora === "piedra") ||
      (usuario === "tijera" && computadora === "papel")
    ) {
      setVictoriasUsuario((prev) => prev + 1);
      return "¡Ganaste!";
    } else {
      setVictoriasComputadora((prev) => prev + 1);
      return "¡Perdiste!";
    }
  };

  const jugar = (opcion: Opcion) => {
    setIsThinking(true);
    setEleccionUsuario(opcion);
    setEleccionComputadora(null);
    setMensaje("");

    setTimeout(() => {
      const computadora = OPCIONES[Math.floor(Math.random() * 3)];
      setEleccionComputadora(computadora);
      const resultado = determinarGanador(opcion, computadora);
      setMensaje(resultado);
      setIsThinking(false);
    }, 1000);
  };

  return (
    <div className="rps-container-2lados">
      {/* LADO IZQUIERDO */}
      <div className="lado usuario">
        <h3>Tu elección</h3>
        {OPCIONES.map((opcion) => (
          <button
            key={opcion}
            className={`rps-button ${eleccionUsuario === opcion ? "seleccionado" : ""}`}
            onClick={() => jugar(opcion)}
            disabled={isThinking}
          >
            <img src={imagenes[opcion]} alt={opcion} className="choice-image" />
          </button>
        ))}
      </div>

      {/* CENTRO */}
      <div className="resultado-mensaje">
        {isThinking ? <p>La computadora está eligiendo...</p> : <h2>{mensaje}</h2>}

        {/* CONTADORES DE VICTORIAS */}
        <div className="contador-victorias">
          <p>🧑‍💻 Usuario: {victoriasUsuario}</p>
          <p>🤖 Computadora: {victoriasComputadora}</p>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="lado computadora">
        <h3>Computadora</h3>
        {OPCIONES.map((opcion) => (
          <div
            key={opcion}
            className={`rps-button ${eleccionComputadora === opcion ? "seleccionado" : ""}`}
          >
            <img src={imagenes[opcion]} alt={opcion} className="choice-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
