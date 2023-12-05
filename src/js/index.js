import SpanishDeck from "./SpanishDeck";
import FrenchDeck from "./FrenchDeck";
import Deck from "./Deck";

/**
 * Current Deck management
 */
let currentDeck = null;

const deckSelectionForm = document.querySelector("#deckSelection");
deckSelectionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const availableDecksSelect = deckSelectionForm.elements["availableDecks"];
  const selectedDeckType =
    availableDecksSelect.options[availableDecksSelect.selectedIndex].value;

  if (selectedDeckType === "Spanish") {
    currentDeck = new SpanishDeck();
  } else {
    currentDeck = new FrenchDeck();
  }

  // Limpiamos lo que pudiera haber del Deck anterior
  limpiarTextArea();

  // cargar los selects
  cardsSelect();
  // Añadimos a los posibles valores de Suit y Value segun el Deck seleccionado
  for (let i = 0; i < currentDeck.possibleCardSuits.length; i++) {
    for (let j = 0; j < currentDeck.possibleCardValues.length; j++) {
      const element =
        currentDeck.possibleCardSuits[i] + currentDeck.possibleCardValues[j];
      currentDeck.add(element);
    }
  }
  // Show in textArea.
  currentDeckCardsTextArea.value = currentDeck.cards;
  console.log(currentDeck.cards);

  // llamar a cargar select para remove
  selectToRemove();
});

/**
 * Current Deck cards management
 */
const currentDeckCardsTextArea = document.querySelector("#currentCardsInDeck");

const cardsAdditionForm = document.querySelector("#cardsAddition");
const availableSuitsSelect = cardsAdditionForm.elements["availableSuits"];
const availableValuesSelect = cardsAdditionForm.elements["availableValues"];

const cardsRemovalForm = document.querySelector("#cardsRemoval");
const availableCardsToRemoveSelect =
  cardsRemovalForm.elements["availableCardsToRemove"];

// TODO añadir addEventListener a `cardsAdditionForm` para poder añadir una nueva Card

cardsAdditionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedSuitsType =
    availableSuitsSelect.options[availableSuitsSelect.selectedIndex].value;
  const selectedValueType =
    availableValuesSelect.options[availableValuesSelect.selectedIndex].value;

  const newCardAdd = selectedSuitsType + selectedValueType;
  currentDeck.add(newCardAdd);
  // currentDeck.check(newCardAdd); // llamar al metodo check..
  // limpiar.
  limpiarTextArea();
  // cargar selects.
  cardsSelect();
  // llamar la funccion que carga el select para remove...
  selectToRemove();
  currentCardsInDeck.value += currentDeck.cards;
});

// TODO añadir addEventListener a `cardsRemoval` para eliminar una Card existente.
cardsRemovalForm.addEventListener("click", (event) => {
  event.preventDefault();
  const removeCard =
    availableCardsToRemoveSelect.options[availableSuitsSelect.selectedIndex]
      .value;
  // currentDeck.check(removeCard); // llamar al metodo check...
  currentDeck.remove(removeCard);

  currentDeckCardsTextArea.value = currentDeck.cards;
  console.log(currentDeck.cards);

  // currentDeck.remove()
});

// TODO añadir addEventListener `` para Mezclar cartas.

const btnMezclar = document.getElementById("btnMezclar");

btnMezclar.addEventListener("click", (event) => {
  event.preventDefault();
  const shuffleCards = currentDeck.cards;

  currentDeck.shuffle();
  console.log(shuffleCards);

  currentDeckCardsTextArea.value = shuffleCards;
});

// Limpiar
function limpiarTextArea() {
  currentDeckCardsTextArea.value = "";
  availableSuitsSelect.innerHTML = "";
  availableValuesSelect.innerHTML = "";
  availableCardsToRemoveSelect.innerHTML = "";
}
// Function para cargar los selects

function cardsSelect() {
  currentDeck.possibleCardSuits.forEach((suit) => {
    const suitOption = document.createElement("option");
    suitOption.value = suit;
    suitOption.innerText = suit;

    availableSuitsSelect.appendChild(suitOption);
  });

  currentDeck.possibleCardValues.forEach((value) => {
    const suitOption = document.createElement("option");
    suitOption.value = value;
    suitOption.innerText = value;

    availableValuesSelect.appendChild(suitOption);
  });
}

// La function qiue carga la selection ...

function selectToRemove() {
  currentDeck.cards.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.innerText = value;

    availableCardsToRemoveSelect.appendChild(option);
  });
}
