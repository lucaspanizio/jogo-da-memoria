import { ICard } from "@/interfaces/card";
import { Card } from "@/components/Card";
import { useApp } from "@/data/hook/useApp";
import "./styles.css";

export function Grid() {
  const { cards, tries, setCards, setTries, first, second, unflip } = useApp();

  function handleClick(id: string) {
    const newCards = cards.map((card: ICard) => {
      // Se clicar novamente no mesmo cartão nada acontece
      if (card.id !== id) return card;

      // Se clicar em cartão já virado nada acontece
      if (card.flipped) return card;

      // Desvira cartões errados
      if (unflip.current && first.current && second.current) {
        first.current.flipped = false;
        second.current.flipped = false;
        first.current = null;
        second.current = null;
        unflip.current = false;
      }

      // Vira o cartão
      card.flipped = true;

      // Guarda a referência dos cartões clicados
      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card;
      }

      // Quando há dois cartões virados, checa se são iguais
      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          // Acertou
          first.current = null;
          second.current = null;
        } else {
          // Errou
          unflip.current = true;
        }
        setTries(tries + 1);
      }

      return card;
    });
    setCards(newCards);
  }

  return (
    <>
      <div className="grid">
        {cards.map((card: ICard) => {
          return <Card {...card} key={card.id} handleClick={handleClick} />;
        })}
      </div>
    </>
  );
}
