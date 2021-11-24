const player_cards_front = document.querySelector(".player-cards");
const dealer_cards_front = document.querySelector(".dealer-cards");

let playerCash = 500;
let playerBet = 100;
let playerCards = [];
let playerPoints = 0;
let dealerCards = [];
let dealerPoints = 0;
let shuffledDeck = [];
let croupierPoints = 0;

let shuffle_deck = () => {
  let deck = [];

  for (let i = 2; i < 11; i++) {
    for (let s = 0; s < 4; s++) {
      let suit = ["C", "D", "P", "T"];
      deck.push(`${i}${suit[s]}`);
    }
  }

  for (let i = 0; i < 4; i++) {
    for (let s = 0; s < 4; s++) {
      let suit = ["C", "D", "P", "T"];
      let letter = ["J", "Q", "K", "A"];
      deck.push(`${letter[i]}${suit[s]}`);
    }
  }

  shuffledDeck = _.shuffle(deck);
};

shuffle_deck();

console.log(`Empezó con ${playerCash}`);
console.log(`Apostó ${playerBet}`);
console.log(shuffledDeck);

let take_card = () => {
  let card = shuffledDeck.pop();
  if (
    card[0] === "A" ||
    card[0] === "K" ||
    card[0] === "Q" ||
    card[0] === "J"
  ) {
    playerPoints += 11;
    playerCards.push(card);
    player_cards_front.innerHTML += `<img src="assets/cards/${
      playerCards[playerCards.length - 1]
    }.png" class="one-card" />`;
  } else {
    playerPoints += parseInt(card.substring(0, card.length - 1));
    playerCards.push(card);
    player_cards_front.innerHTML += `<img src="assets/cards/${
      playerCards[playerCards.length - 1]
    }.png" class="one-card" />`;
  }
  if (playerPoints === 21) {
    console.log("Felicidades! Has sacado 21!");
    playerCash += playerBet * 2;
    console.log(playerCash);
  } else if (playerPoints > 21) {
    console.log("Has perdido, pasaste los 21");
    console.log(playerCash);
  }
  console.log(playerCards);
  console.log(`El jugador tiene ${playerPoints} puntos`);
};

playerCash -= playerBet;
take_card();
