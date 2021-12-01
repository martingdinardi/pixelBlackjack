let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

const presentation_front = document.querySelector(".presentation");

const player_cards_front = document.querySelector(".player-cards");
const player_points_front = document.querySelector(".player-points");
const dealer_cards_front = document.querySelector(".dealer-cards");
const dealer_points_front = document.querySelector(".dealer-points");
const player_money_front = document.querySelector(".money-amount");

const hit_button_front = document.querySelector(".hit-button");
const stand_button_front = document.querySelector(".stand-button");
const newgame_button_front = document.querySelector(".newgame-button");
const startgame_button_front = document.querySelector(".startgame-button");

let playerCash = 500;
let playerBet = 100;
let playerCards = [];
let playerPoints = 0;
let dealerCards = [];
let dealerPoints = 0;
let shuffledDeck = [];
let croupierPoints = 0;

player_money_front.innerHTML += `<p>$${playerCash}</p>`;

startgame_button_front.addEventListener("click", () => {
  startgame_button_front.setAttribute("hidden", "");
  presentation_front.setAttribute("hidden", "");
});
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

let take_card = () => {
  let card = shuffledDeck.pop();
  if (card[0] === "A") {
    playerPoints += 11;
    playerCards.push(card);
    player_cards_front.innerHTML += `<img src="assets/cards/${
      playerCards[playerCards.length - 1]
    }.png" class="one-card" />`;
  } else if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
    playerPoints += 10;
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
    hit_button_front.setAttribute("disabled", "");
  } else if (playerPoints > 21) {
    player_cards_front.innerHTML += `<p>Has perdido, pasaste los 21</p>`;
    hit_button_front.setAttribute("disabled", "");
    stand_button_front.setAttribute("disabled", "");
    newgame_button_front.removeAttribute("disabled");
    playerCash -= playerBet;
    player_money_front.innerHTML = `<p>$${playerCash}</p>`;
  }
  player_points_front.innerHTML = `${playerPoints}`;
  console.log(`player points ${playerPoints}`);
};

const dealer_cards = () => {
  let card = shuffledDeck.pop();
  if (card[0] === "A") {
    dealerPoints += 11;
    dealerCards.push(card);
    dealer_cards_front.innerHTML += `<img src="assets/cards/${
      dealerCards[dealerCards.length - 1]
    }.png" class="one-card" />`;
  } else if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
    dealerPoints += 10;
    dealerCards.push(card);
    dealer_cards_front.innerHTML += `<img src="assets/cards/${
      dealerCards[dealerCards.length - 1]
    }.png" class="one-card" />`;
  } else {
    dealerPoints += parseInt(card.substring(0, card.length - 1));
    dealerCards.push(card);
    dealer_cards_front.innerHTML += `<img src="assets/cards/${
      dealerCards[dealerCards.length - 1]
    }.png" class="one-card" />`;
  }
  dealer_points_front.innerHTML = `${dealerPoints}`;
  console.log(`dealer points ${dealerPoints}`);
};

/* take_card();
take_card();
dealer_cards();
dealer_cards_front.innerHTML += `<img src="assets/cards/deck.png" class="one-card" />`; */

if (playerCards.length === 2 && playerPoints === 21) {
  player_cards_front.innerHTML += `<p>BLACKJACK!!!</p>`;
  playerCash += playerBet;
  playerCash += playerBet / 2;
  player_money_front.innerHTML = `<p>$${playerCash}</p>`;
  hit_button_front.setAttribute("disabled", "");
  stand_button_front.setAttribute("disabled", "");
  newgame_button_front.removeAttribute("disabled");
} else if (playerPoints > 21) {
  player_cards_front.innerHTML += `<p>Has perdido, pasaste los 21</p>`;
  hit_button_front.setAttribute("disabled", "");
  stand_button_front.setAttribute("disabled", "");
  newgame_button_front.removeAttribute("disabled");
  playerCash -= playerBet;
  player_money_front.innerHTML = `<p>$${playerCash}</p>`;
}

hit_button_front.addEventListener("click", () => {
  take_card();
});

stand_button_front.addEventListener("click", () => {
  hit_button_front.setAttribute("disabled", "");
  stand_button_front.setAttribute("disabled", "");
  dealer_cards_front.removeChild(dealer_cards_front.lastElementChild);

  do {
    dealer_cards();
  } while (dealerPoints <= 16);

  if (dealerPoints > 21) {
    player_cards_front.innerHTML += `<p>Has ganado! El dealer se pasó de los 21!</p>`;
    newgame_button_front.removeAttribute("disabled");
    playerCash += playerBet;
    player_money_front.innerHTML = `<p>$${playerCash}</p>`;
  } else if (dealerPoints < playerPoints) {
    player_cards_front.innerHTML += `<p>Has ganado! Tienes un puntaje mayor al del dealer</p>`;
    newgame_button_front.removeAttribute("disabled");
    playerCash += playerBet;
    player_money_front.innerHTML = `<p>$${playerCash}</p>`;
  } else if (dealerPoints === playerPoints) {
    player_cards_front.innerHTML += `<p>Empate! El dealer también formó ${playerPoints} puntos</p>`;
    newgame_button_front.removeAttribute("disabled");
  } else if (dealerPoints > playerPoints) {
    player_cards_front.innerHTML += `<p>Has perdido! El dealer formó un número mayor a ${playerPoints}</p>`;
    newgame_button_front.removeAttribute("disabled");
    playerCash -= playerBet;
    player_money_front.innerHTML = `<p>$${playerCash}</p>`;
  }
});

newgame_button_front.addEventListener("click", () => {
  shuffle_deck();
  playerPoints -= playerPoints;
  dealerPoints -= dealerPoints;
  playerCards.splice(0, playerCards.length);
  dealerCards.splice(0, dealerCards.length);
  player_points_front.innerHTML = `${playerPoints}`;
  dealer_points_front.innerHTML = `${dealerPoints}`;
  player_cards_front.innerHTML = ``;
  dealer_cards_front.innerHTML = ``;
  console.log(playerCards);
  console.log(dealerCards);
  take_card();
  take_card();
  dealer_cards();
  dealer_cards_front.innerHTML += `<img src="assets/cards/deck.png" class="one-card" />`;
  hit_button_front.removeAttribute("disabled");
  stand_button_front.removeAttribute("disabled");
  newgame_button_front.setAttribute("disabled", "");
  if (playerCards.length === 2 && playerPoints === 21) {
    player_cards_front.innerHTML += `<p>BLACKJACK!!!</p>`;
    playerCash += playerBet;
    playerCash += playerBet / 2;
    player_money_front.innerHTML = `<p>$${playerCash}</p>`;
    hit_button_front.setAttribute("disabled", "");
    stand_button_front.setAttribute("disabled", "");
    newgame_button_front.removeAttribute("disabled");
  } else if (playerPoints === 21) {
    player_cards_front.innerHTML += `<p>Has ganado! Sumaste 21!</p>`;
    playerCash += playerBet;
    player_money_front.innerHTML = `<p>$${playerCash}</p>`;
    hit_button_front.setAttribute("disabled", "");
    stand_button_front.setAttribute("disabled", "");
    newgame_button_front.removeAttribute("disabled");
  } else if (playerPoints > 21) {
    player_cards_front.innerHTML += `<p>Has perdido, pasaste los 21</p>`;
    hit_button_front.setAttribute("disabled", "");
    stand_button_front.setAttribute("disabled", "");
    newgame_button_front.removeAttribute("disabled");
    playerCash -= playerBet;
    player_money_front.innerHTML = `<p>$${playerCash}</p>`;
  }
});
