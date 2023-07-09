import { Icon } from "@iconify/react";
import { ICard } from "@/interfaces/card";
import "./styles.css";

interface ICardProps extends ICard {
  handleClick: (id: string) => void;
}

export function Card({ id, back, flipped = false, handleClick }: ICardProps) {
  return (
    <div
      className={`card__content ${flipped ? "flipped" : ""}`}
      onClick={() => handleClick(id)}
    >
      <div className="card__face front" />
      <div className="card__face back">
        <Icon icon={`devicon:${back}`} className="icon" />
        {/* <img src={`/assets/${back}.svg`} alt="React" /> */}
      </div>
    </div>
  );
}
