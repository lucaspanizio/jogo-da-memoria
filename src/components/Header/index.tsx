import { useApp } from "@/data/hook/useApp";
import "./styles.css";

export function Header() {
  const { tries, initialize } = useApp();
  return (
    <div className="header">
      <h1>Jogo da Memória</h1>
      <p>Tentativas: {tries}</p>
      <button className="btn" onClick={initialize}>
        Reiniciar
      </button>
    </div>
  );
}
