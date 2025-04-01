import { useState, FC, JSX } from "react";
import RPSButtons from "../components/RPSButtons/RPSButtons";

type MessageType = string | null;

const GamePage: FC = (): JSX.Element => {
  const [message] = useState<MessageType>();

  // Funciones con tipos explícitos

  return (
    <div className="container">
      <h1>Piedra, Papel, Tijeras!</h1>
      <RPSButtons />
    </div>
  );
};

export default GamePage; // Nombre del componente actualizado
