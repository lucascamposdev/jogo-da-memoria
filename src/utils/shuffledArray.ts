import { Card as CardInterface } from "../data/cards";

function shuffledDeck (deck: CardInterface[]): CardInterface[] {
    const duplicatedArray = deck.flatMap((card) => [card, { ...card }]);

    const shuffledArray = [...duplicatedArray];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    
    return shuffledArray
}

export default shuffledDeck;