import Deck from "./Deck";

export default class FrenchDeck extends Deck {
  constructor() {
    super(
      ["Diamonds", "Hearts", "Clubs", "Spades"],
      [
        "Ace",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Jack",
        "Queen",
        "King",
      ]
    );
  }
}
