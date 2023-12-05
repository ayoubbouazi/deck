export default class Deck {
  constructor(possibleCardSuits, possibleCardValues) {
    this.cards = [];
    this.possibleCardSuits = possibleCardSuits;
    this.possibleCardValues = possibleCardValues;
  }

  add(card) {
    this.cards.push(card);
  }

  remove(card) {
    // TODO: eliminar `card` del array `this.cards`
    card = Math.floor(Math.random() * this.cards.length) + 1;
    return this.cards.splice(card, 1)[0];
  }

  shuffle() {
    // TODO: tienes que reordenar el array `this.cards` de manera aleatoria
    for (let i = this.cards.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }

  check(card) {
    return (
      this.possibleCardSuits.contains(card.suit) &&
      this.possibleCardValues.contains(card.value)
    );
  }
}
