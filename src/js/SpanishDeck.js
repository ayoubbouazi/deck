import Deck from "./Deck";

export default class SpanishDeck extends Deck {
  constructor() {
    super(
      ["Oros", "Bastos", "Espadas", "Copas"],
      [
        "Uno",
        "Dos",
        "Tres",
        "Cuatro",
        "Cinco",
        "Seis",
        "Siete",
        "Sota",
        "Caballo",
        "Rey",
      ]
    );
  }

  remove(card) {
    if (card) {
      // TODO: eliminar una carta aleatoria de `this.cards`
      super.remove(card);
    } else {
      // super.remove(card);
    }
  }
}
