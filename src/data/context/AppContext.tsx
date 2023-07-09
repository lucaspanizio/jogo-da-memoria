import defaultCards from "@/../cards-mock";
import { duplicateArray, randomKeyGen, sortArray } from "@/utils/functions";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ICard } from "@/interfaces/card";

type TAppContext = {
  cards: ICard[];
  tries: number;
  unflip: MutableRefObject<boolean>;
  first: MutableRefObject<ICard | null>;
  second: MutableRefObject<ICard | null>;
  setCards: Dispatch<SetStateAction<ICard[]>>;
  setTries: Dispatch<SetStateAction<number>>;
  initialize: () => void;
};

// export const AppContext = createContext<TAppContext>({
//   cards: defaultCards,
//   tries: 0,
//   matches: 0,
//   first: {} as MutableRefObject<ICard | null>,
//   second: {} as MutableRefObject<ICard | null>,
//   unflip: false as MutableRefObject<boolean>,
// });

export const AppContext = createContext<TAppContext>({} as TAppContext);

export function AppProvider(props: React.PropsWithChildren) {
  const [cards, setCards] = useState<ICard[]>(defaultCards);
  const [tries, setTries] = useState(0);

  const first = useRef<ICard | null>(null);
  const second = useRef<ICard | null>(null);
  const unflip = useRef(false);

  function initialize() {
    // Duplica os cartões
    let newCards = duplicateArray(defaultCards);

    // Gera novos ids aleatórios para cada um
    newCards = newCards.map((card) => ({ ...card, id: randomKeyGen() }));

    // Embaralha os cartões
    newCards = sortArray(newCards);

    // Atualiza os estados
    setCards(newCards);
    setTries(0);

    // Limpa as referêcias
    first.current = null;
    second.current = null;
    unflip.current = false;
  }

  useEffect(() => {
    initialize();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cards,
        tries,
        setCards,
        setTries,
        initialize,
        first,
        second,
        unflip,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
