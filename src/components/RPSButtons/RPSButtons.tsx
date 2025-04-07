import { useState } from "react";
import "./RPSButtons_Style.css";
import { GameHistory } from "../GameHistory/GameHistory";
import { t } from "i18next";
import { useLocation } from "react-router-dom";

type Opcion = "piedra" | "papel" | "tijera";

const imagenes: Record<Opcion, string> = {
  piedra: "/src/components/RPSButtons/RPSButtons_Media/Rock.png",
  papel: "/src/components/RPSButtons/RPSButtons_Media/Paper.png",
  tijera: "/src/components/RPSButtons/RPSButtons_Media/Scissors.png",
};

const OPCIONES: Opcion[] = ["piedra", "papel", "tijera"];

export default function Juego() {
  const location = useLocation();
  const { username } = location.state || { username: "Player" };

  const [isThinking, setIsThinking] = useState(false);
  const [eleccionUsuario, setEleccionUsuario] = useState<Opcion | null>(null);
  const [eleccionComputadora, setEleccionComputadora] = useState<Opcion | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [victoriasUsuario, setVictoriasUsuario] = useState(0);
  const [victoriasComputadora, setVictoriasComputadora] = useState(0);
  const [gameHistory, setGameHistory] = useState<Array<{
    id: number;
    date: string;
    playerName: string;
    playerChoice: string;
    computerChoice: string;
    result: string;
  }>>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const determinarGanador = (usuario: Opcion, computadora: Opcion): string => {
    if (usuario === computadora) return t('draw');
    if (
      (usuario === "piedra" && computadora === "tijera") ||
      (usuario === "papel" && computadora === "piedra") ||
      (usuario === "tijera" && computadora === "papel")
    ) {
      setVictoriasUsuario((prev) => prev + 1);
      return t('win');
    } else {
      setVictoriasComputadora((prev) => prev + 1);
      return t('lost');
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

      // Add to game history
      setGameHistory(prev => [...prev, {
        id: Date.now(),
        date: new Date().toLocaleString(),
        playerName: username,
        playerChoice: opcion,
        computerChoice: computadora,
        result: resultado
      }]);

      setIsThinking(false);
    }, 1000);
  };

  return (
    <>
      <div className="rps-container-2lados">
        {/* LADO IZQUIERDO */}
        <div className="lado usuario">
          <h3 className="text-black dark:text-sky-200">{t('yourEleccion')}</h3>
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
          {isThinking ? <p>{t('computerEleccion')}</p> : <h2>{mensaje}</h2>}

          {/* CONTADORES DE VICTORIAS */}
          <div className="contador-victorias">
            <p>🧑‍💻 {t('user')}: {victoriasUsuario}</p>
            <p>🤖 {t('computer')} : {victoriasComputadora}</p>
          </div>

          {/* HISTORY BUTTON */}
          <button 
            onClick={() => setIsHistoryOpen(true)}
            className="history-button"
          >
            {t('gameHistory')}
          </button>
        </div>

        {/* LADO DERECHO */}
        <div className="lado computadora">
          <h3 className="text-black dark:text-sky-200">{t('computer')}</h3>
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

      <GameHistory 
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        gameHistory={gameHistory}
        playerName={username}
      />
    </>
  );
}
