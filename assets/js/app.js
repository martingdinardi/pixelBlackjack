let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

// variables

let player_name_window_switch = false;

let player_name;
const game_table_front = document.querySelector(".game-table");
const player_name_front = document.querySelector(".player-name");
const player_name_input_front = document.querySelector(".playerName");
const player_section_front = document.querySelector(".player-section");
const dealer_section_front = document.querySelector(".dealer-section");
const player_cards_front = document.querySelector(".player-cards");
const player_points_front = document.querySelector(".player-points");
const dealer_cards_front = document.querySelector(".dealer-cards");
const dealer_points_front = document.querySelector(".dealer-points");
const player_money_front = document.querySelector(".money-amount");
const player_bet_front = document.querySelector(".player-bet");
const inital_window_front = document.querySelector(".initial-window");
const initial_window_container_front = document.querySelector(
  ".initial-window-container"
);
const welcome_container = document.querySelector(".welcome-container");
const initial_elements_front = document.querySelector(".initial-elements");
const continue_button_front = document.querySelector(".continue-button");
const start_game_container = document.querySelector(".start-game-container");
const press_start_text_front = document.querySelector(".press-start-text");
const startgame_button_front = document.querySelector(".startgame-button");
const match_messages_front = document.querySelector(".match-messages");
const bet_value_front = document.querySelector(".bet-value");
const bet_value_items_front = document.querySelector(".bet-value-items");
const bet_section_front = document.querySelector(".bet-section-window");
const bet_button_front = document.querySelector(".bet-button");
const bet_item_front = document.querySelector(".bet");
const bet_letter_b = document.querySelector(".bet-letter-b");
const bet_letter_e = document.querySelector(".bet-letter-e");
const bet_letter_t = document.querySelector(".bet-letter-t");
const fiftybet_button_front = document.querySelector(".fifty");
const onehundred_bet_button_front = document.querySelector(".one-hundred");
const twohundred_bet_button_front = document.querySelector(".two-hundred");
const hit_button_front = document.querySelector(".hit-button");
const stand_button_front = document.querySelector(".stand-button");

let playerCash = 500;
let playerBet = 0;
let playerCards = [];
let playerPoints = 0;
let dealerCards = [];
let dealerPoints = 0;
let shuffledDeck = [];
let croupierPoints = 0;

player_money_front.innerHTML += `<p>${playerCash}</p>`;

// functions

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

  /*
   */
  shuffledDeck = _.shuffle(deck);
  /*
  shuffledDeck = deck;
  shuffledDeck.pop();
  shuffledDeck.pop();
  shuffledDeck.pop();
  console.log(shuffledDeck);
  */
};

const restartBet = () => {
  bet_item_front.innerHTML = "";
};

const newMatch = () => {
  shuffle_deck();
  /* playerPoints -= playerPoints;
  dealerPoints -= dealerPoints; */
  playerCards.splice(0, playerCards.length);
  dealerCards.splice(0, dealerCards.length);
  player_points_front.innerHTML = `${playerPoints}`;
  dealer_points_front.innerHTML = `${dealerPoints}`;
  player_cards_front.innerHTML = ``;
  dealer_cards_front.innerHTML = ``;
  setTimeout(() => {
    take_card();
  }, 1100);
  setTimeout(() => {
    take_card();
  }, 2200);
  /* take_card();
  take_card(); */
  setTimeout(() => {
    dealer_cards();
  }, 3300);

  setTimeout(() => {
    dealer_cards_front.innerHTML += `<img src="assets/cards/deck.png" class="one-card-dealer dealing-dealer-card" />`;
    setTimeout(() => {
      removeDealerDealClass();
    }, 800);
  }, 4400);
  /* dealer_cards(); */
  /* dealer_cards_front.innerHTML += `<img src="assets/cards/deck.png" class="one-card-dealer" />`; */
  showMatchButtons();
  /* hit_button_front.removeAttribute("disabled");
  stand_button_front.removeAttribute("disabled"); */
  bet_button_front.setAttribute("disabled", "");
};

const goodLuckmessage = () => {
  setTimeout(() => {
    match_messages_front.innerHTML = `<img src="./assets/items/goodluck.png" />`;
  }, 500);
  setTimeout(() => {
    match_messages_front.innerHTML = ``;
  }, 2500);
};

const showBetSection = () => {
  bet_section_front.removeAttribute("hidden");
};

const betButtonEnabled = () => {
  bet_button_front.removeAttribute("disabled");
};

const removeBets = () => {
  playerBet = 0;
  player_bet_front.innerHTML = /* `<p>${playerBet}</p>` */ "";
  bet_button_front.setAttribute("disabled", "");
};

const hideCards = () => {
  player_cards_front.innerHTML = `<p></p>`;
  dealer_cards_front.innerHTML = `<p></p>`;
};

const hideBetButtons = () => {
  betLetterHidden();
  bet_section_front.setAttribute("hidden", "");
  bet_button_front.setAttribute("hidden", "");
};

const showBetButtons = () => {
  bet_section_front.removeAttribute("hidden");
  /* fiftybet_button_front.removeAttribute("hidden");
  onehundred_bet_button_front.removeAttribute("hidden");
  twohundred_bet_button_front.removeAttribute("hidden"); */
  bet_button_front.removeAttribute("hidden");
};

const hideMatchButtons = () => {
  hit_button_front.setAttribute("hidden", "");
  stand_button_front.setAttribute("hidden", "");
};

const showMatchButtons = () => {
  hit_button_front.removeAttribute("hidden");
  stand_button_front.removeAttribute("hidden");
};

const removePoints = () => {
  playerPoints -= playerPoints;
  dealerPoints -= dealerPoints;
  player_points_front.innerHTML = ``;
  dealer_points_front.innerHTML = ``;
};

const showGameSection = () => {
  player_section_front.removeAttribute("hidden");
  dealer_section_front.removeAttribute("hidden");
};

const hideGameSection = () => {
  player_section_front.setAttribute("hidden", "");
  dealer_section_front.setAttribute("hidden", "");
};

const endMatchActions = () => {
  bet_value_front.classList.remove("bet-value-move");
  bet_value_items_front.classList.remove("bet-value-items-move");
  hideCards();
  hideMatchButtons();
  restartBet();
  removeBets();
  removePoints();
  hideGameSection();
  showBetButtons();
};

const endMatch = () => {
  setTimeout(() => {
    endMatchActions();
  }, 5000);
};

const hideInitialsElements = () => {
  initial_elements_front.setAttribute("hidden", "");
};

const showWelcomeElements = () => {
  welcome_container.removeAttribute("hidden");
};

const hideWelcomeElements = () => {
  welcome_container.setAttribute("hidden", "");
};

const showStartgameContainer = () => {
  start_game_container.removeAttribute("hidden");
};

startgame_button_front.addEventListener("click", () => {
  initial_window_container_front.setAttribute("hidden", "");
  goodLuckmessage();
  startgame_button_front.setAttribute("hidden", "");
  setTimeout(() => {
    bet_section_front.removeAttribute("hidden");
  }, 2800);
});

const verifyPlayerName = () => {
  player_name = document.querySelector(".playerName").value;
  if (player_name.length >= 1) {
    continue_button_front.removeAttribute("disabled");
  }
  console.log(player_name);
};

const removeDealClass = () => {
  let cardWithDealClass = document.querySelectorAll(".dealing-player-card");
  cardWithDealClass.forEach((card) => {
    card.classList.remove("dealing-player-card");
  });
};

const removeDealerDealClass = () => {
  let cardWithDealClass = document.querySelectorAll(".dealing-dealer-card");
  cardWithDealClass.forEach((card) => {
    card.classList.remove("dealing-dealer-card");
  });
};

const removeSecondCardDealerClass = () => {
  let secondCard = document.querySelectorAll(".second-card-dealer");
  secondCard.forEach((card) => {
    card.classList.remove("second-card-dealer");
  });
};

const blackjack = () => {
  player_cards_front.innerHTML += `<p>BLACKJACK!!!</p>`;
  playerCash += playerBet * 2.5;
  dealer_section_front.setAttribute("hidden", "");

  player_money_front.innerHTML = `<p>${playerCash}</p>`;
  hit_button_front.setAttribute("disabled", "");
  stand_button_front.setAttribute("disabled", "");
  bet_button_front.removeAttribute("disabled");
};

const loseMoreThanTwentyOne = () => {
  setTimeout(() => {
    player_cards_front.innerHTML += `<p>Has perdido, pasaste los 21</p>`;
  }, 2000);
  hit_button_front.setAttribute("disabled", "");
  stand_button_front.setAttribute("disabled", "");
  bet_button_front.removeAttribute("disabled");
  player_money_front.innerHTML = `<p>${playerCash}</p>`;
};

const betLetterAppears = () => {
  bet_button_front.style.visibility = "visible";
  setTimeout(() => {
    bet_letter_b.classList.add("bet-letter");
  }, 200);
  setTimeout(() => {
    bet_letter_e.classList.add("bet-letter");
  }, 300);
  setTimeout(() => {
    bet_letter_t.classList.add("bet-letter");
  }, 400);
};

const betLetterHidden = () => {
  bet_letter_b.classList.remove("bet-letter");
  bet_letter_e.classList.remove("bet-letter");
  bet_letter_t.classList.remove("bet-letter");
  bet_button_front.style.visibility = "hidden";
};

// addEventListener

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && player_name_window_switch === false) {
    hideInitialsElements();
    showWelcomeElements();
    player_name_window_switch = true;
    player_name_input_front.setAttribute("autofocus", "");
  } else if (
    e.key == "Enter" &&
    player_name_window_switch === true &&
    player_name !== undefined
  ) {
    hideWelcomeElements();
    showStartgameContainer();
    player_name_front.innerHTML = `${player_name}`;
  }
});

press_start_text_front.addEventListener("click", () => {
  hideInitialsElements();
  showWelcomeElements();
  player_name_window_switch = true;
  player_name_input_front.setAttribute("autofocus", "");
});

continue_button_front.addEventListener("click", () => {
  hideWelcomeElements();
  showStartgameContainer();
  player_name_front.innerHTML = `${player_name}`;
});

fiftybet_button_front.addEventListener("click", () => {
  playerCash >= 50 && playerBet < 500
    ? ((playerBet += 50),
      (playerCash -= 50),
      (bet_item_front.innerHTML += `<img src="assets/items/fifty.png" class="new-chip" />`),
      betLetterAppears())
    : (playerBet += 0);
  /*   if (playerBet !== 0) {
    bet_button_front.style.visibility = "visible";
  } */
  player_bet_front.innerHTML = `<p>${playerBet}</p>`;

  betButtonEnabled();
});

onehundred_bet_button_front.addEventListener("click", () => {
  playerCash >= 100 && playerBet < 450
    ? ((playerBet += 100),
      (playerCash -= 100),
      (bet_item_front.innerHTML += `<img src="assets/items/onehundred.png" class="new-chip"/>`))
    : (playerBet += 0);
  if (playerBet !== 0) {
    /* bet_button_front.removeAttribute("hidden"); */
    /* bet_button_front.style.visibility = "visible"; */
    betLetterAppears();
  }
  player_bet_front.innerHTML = `<p>${playerBet}</p>`;

  betButtonEnabled();
});

twohundred_bet_button_front.addEventListener("click", () => {
  playerCash >= 200 && playerBet < 400
    ? ((playerBet += 200),
      (playerCash -= 200),
      (bet_item_front.innerHTML += `<img src="assets/items/twohundred.png" class="new-chip"/>`))
    : (playerBet += 0);
  if (playerBet !== 0) {
    /* bet_button_front.removeAttribute("hidden"); */
    /* bet_button_front.style.visibility = "visible"; */
    betLetterAppears();
  }
  player_bet_front.innerHTML = `<p>${playerBet}</p>`;

  betButtonEnabled();
});

let take_card = () => {
  let card = shuffledDeck.pop();
  player_points_front.removeAttribute("hidden");
  if (card[0] === "A") {
    playerPoints += 11;
    playerCards.push(card);
    player_cards_front.innerHTML += `<img src="assets/cards/${
      playerCards[playerCards.length - 1]
    }.png" class="one-card dealing-player-card" />`;
    setTimeout(() => {
      removeDealClass();
    }, 800);
  } else if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
    playerPoints += 10;
    playerCards.push(card);
    player_cards_front.innerHTML += `<img src="assets/cards/${
      playerCards[playerCards.length - 1]
    }.png" class="one-card dealing-player-card" />`;
    setTimeout(() => {
      removeDealClass();
    }, 1050);
  } else {
    playerPoints += parseInt(card.substring(0, card.length - 1));
    playerCards.push(card);
    player_cards_front.innerHTML += `<img src="assets/cards/${
      playerCards[playerCards.length - 1]
    }.png" class="one-card dealing-player-card" />`;
    setTimeout(() => {
      removeDealClass();
    }, 1050);
  }
  if (playerCards.length === 2 && playerPoints === 21) {
    /* player_cards_front.innerHTML += `<p>BLACKJACK!!!</p>`;
    playerCash += playerBet * 2.5;
    player_money_front.innerHTML = `<p>${playerCash}</p>`;
    hit_button_front.setAttribute("disabled", "");
    stand_button_front.setAttribute("disabled", "");
    bet_button_front.removeAttribute("disabled"); */
    blackjack();
    endMatch();
  } else if (playerPoints === 21) {
    hit_button_front.setAttribute("disabled", "");
  } else if (playerPoints > 21 && playerCash > 0) {
    /* player_cards_front.innerHTML += `<p>Has perdido, pasaste los 21</p>`;
    hit_button_front.setAttribute("disabled", "");
    stand_button_front.setAttribute("disabled", "");
    bet_button_front.removeAttribute("disabled");
    player_money_front.innerHTML = `<p>${playerCash}</p>`; */
    loseMoreThanTwentyOne();
    endMatch();
  } else if (playerPoints > 21 && playerCash === 0) {
    game_table_front.setAttribute("hidden", "");
    player_section_front.setAttribute("hidden", "");
  }
  setTimeout(() => {
    player_points_front.innerHTML = `${playerPoints}`;
  }, 500);
  console.log(`player points ${playerPoints}`);
};

const dealer_cards = () => {
  let card = shuffledDeck.pop();
  dealer_points_front.removeAttribute("hidden", "");
  const getCardToDealer = () => {
    dealerCards.push(card);
    /* dealer_cards_front.removeAttribute("hidden", ""); */
    dealer_cards_front.innerHTML += `<img src="assets/cards/${
      dealerCards[dealerCards.length - 1]
    }.png" class="one-card-dealer dealing-dealer-card" />`;
    setTimeout(() => {
      removeDealerDealClass();
    }, 800);
    if ((dealerCards.length = 1 && playerPoints != 21)) {
      setTimeout(() => {
        hit_button_front.removeAttribute("disabled");
        stand_button_front.removeAttribute("disabled");
      }, 1500);
    }
  };

  /*   if (dealerCards.length = 1) {
    setTimeout(() => {
      hit_button_front.removeAttribute("disabled");
      stand_button_front.removeAttribute("disabled");
    }, 1500);
  } */

  if (card[0] === "A") {
    dealerPoints += 11;
    getCardToDealer();
  } else if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
    dealerPoints += 10;
    getCardToDealer();
  } else {
    dealerPoints += parseInt(card.substring(0, card.length - 1));
    getCardToDealer();
  }
  setTimeout(() => {
    dealer_points_front.innerHTML = `${dealerPoints}`;
  }, 500);
  console.log(`dealer points ${dealerPoints}`);

  if (dealerPoints > 21) {
    player_cards_front.innerHTML += `<p>Has ganado! El dealer se pasó de los 21!</p>`;
    bet_button_front.removeAttribute("disabled");
    playerCash += playerBet * 2;
    player_money_front.innerHTML = `<p>${playerCash}</p>`;

    endMatch();
  } else if (dealerPoints >= 17 && dealerPoints < playerPoints) {
    player_cards_front.innerHTML += `<p>Has ganado! Tienes un puntaje mayor al del dealer</p>`;
    bet_button_front.removeAttribute("disabled");
    playerCash += playerBet * 2;
    player_money_front.innerHTML = `<p>${playerCash}</p>`;

    endMatch();
  } else if (dealerCards.length >= 2 && dealerPoints === playerPoints) {
    player_cards_front.innerHTML += `<p>Empate! El dealer también formó ${playerPoints} puntos</p>`;
    bet_button_front.removeAttribute("disabled");
    playerCash += playerBet;
    player_money_front.innerHTML = `<p>${playerCash}</p>`;

    endMatch();
  } else if (
    dealerCards.length >= 2 &&
    dealerPoints > playerPoints &&
    dealerPoints <= 21
  ) {
    player_cards_front.innerHTML += `<p>Has perdido! El dealer formó un número mayor a ${playerPoints}</p>`;
    bet_button_front.removeAttribute("disabled");

    endMatch();
  }
};

hit_button_front.addEventListener("click", () => {
  setTimeout(() => {
    take_card();
  }, 1500);
  /* take_card(); */
});

stand_button_front.addEventListener("click", () => {
  hit_button_front.setAttribute("disabled", "");
  stand_button_front.setAttribute("disabled", "");
  dealer_cards_front.removeChild(dealer_cards_front.lastElementChild);
  const viewSecondDealerCard = () => {
    let card = shuffledDeck.pop();
    dealerCards.push(card);
    dealer_cards_front.innerHTML += `<img src="assets/cards/${
      dealerCards[dealerCards.length - 1]
    }.png" class="one-card-dealer second-card-dealer"/>`;

    if (card[0] === "A") {
      dealerPoints += 11;
      /* getCardToDealer(); */
      console.log(dealerPoints);
    } else if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
      dealerPoints += 10;
      /* getCardToDealer(); */
      console.log(dealerPoints);
    } else {
      dealerPoints += parseInt(card.substring(0, card.length - 1));
      /* getCardToDealer(); */
      console.log(dealerPoints);
    }

    dealer_points_front.innerHTML = `${dealerPoints}`;

    /* if (dealerCards.length == 2 && dealerPoints > 21) {
      player_cards_front.innerHTML += `<p>Has ganado! El dealer se pasó de los 21!</p>`;
      bet_button_front.removeAttribute("disabled");
      playerCash += playerBet * 2;
      player_money_front.innerHTML = `<p>${playerCash}</p>`;

      endMatch(); 
      }*/
    if (
      dealerCards.length == 2 &&
      dealerPoints >= 17 &&
      dealerPoints < playerPoints
    ) {
      player_cards_front.innerHTML += `<p>Has ganado! Tienes un puntaje mayor al del dealer</p>`;
      bet_button_front.removeAttribute("disabled");
      playerCash += playerBet * 2;
      player_money_front.innerHTML = `<p>${playerCash}</p>`;

      endMatch();
    } else if (dealerCards.length == 2 && dealerPoints > 21) {
      player_cards_front.innerHTML += `<p>Has ganado! El dealer se pasó de los 21</p>`;
      bet_button_front.removeAttribute("disabled");
      playerCash += playerBet * 2;
      player_money_front.innerHTML = `<p>${playerCash}</p>`;

      endMatch();
    } else if (dealerCards.length === 2 && dealerPoints === playerPoints) {
      player_cards_front.innerHTML += `<p>Empate! El dealer también formó ${playerPoints} puntos</p>`;
      bet_button_front.removeAttribute("disabled");
      playerCash += playerBet;
      player_money_front.innerHTML = `<p>${playerCash}</p>`;

      endMatch();
    } else if (
      dealerCards.length === 2 &&
      dealerPoints > playerPoints &&
      dealerPoints <= 21
    ) {
      player_cards_front.innerHTML += `<p>Has perdido! El dealer formó un número mayor a ${playerPoints}</p>`;
      bet_button_front.removeAttribute("disabled");

      endMatch();
    } else if (
      dealerCards.length === 2 &&
      dealerPoints < playerPoints &&
      dealerPoints < 17
    ) {
      /* do {
        dealer_cards
        
      } while (dealerPoints <= 17); */
      function getCardsToDealerWhenPLayerStand(i) {
        if (i < 0) return;

        setTimeout(function () {
          let card = shuffledDeck.pop();
          const getCardToDealer = () => {
            dealerCards.push(card);
            dealer_cards_front.innerHTML += `<img src="assets/cards/${
              dealerCards[dealerCards.length - 1]
            }.png" class="one-card-dealer dealing-dealer-card" />`;
            setTimeout(() => {
              removeDealerDealClass();
            }, 800);
          };
          if (card[0] === "A") {
            dealerPoints += 11;
            getCardToDealer();
          } else if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
            dealerPoints += 10;
            getCardToDealer();
          } else {
            dealerPoints += parseInt(card.substring(0, card.length - 1));
            getCardToDealer();
          }
          dealer_points_front.innerHTML = `${dealerPoints}`;
          console.log(`dealer points ${dealerPoints}`);

          if (dealerPoints >= 17 && dealerPoints < playerPoints) {
            player_cards_front.innerHTML += `<p>Has ganado! Tienes un puntaje mayor al del dealer</p>`;
            bet_button_front.removeAttribute("disabled");
            playerCash += playerBet * 2;
            player_money_front.innerHTML = `<p>${playerCash}</p>`;
            endMatch();
            return;
          } else if (dealerPoints === playerPoints) {
            player_cards_front.innerHTML += `<p>Empate! El dealer también formó ${playerPoints} puntos</p>`;
            bet_button_front.removeAttribute("disabled");
            playerCash += playerBet;
            player_money_front.innerHTML = `<p>${playerCash}</p>`;
            endMatch();
            return;
          } else if (dealerPoints <= 21 && dealerPoints > playerPoints) {
            player_cards_front.innerHTML += `<p>Has perdido! El dealer formó un número mayor a ${playerPoints}</p>`;
            bet_button_front.removeAttribute("disabled");
            endMatch();
            return;
          } else if (dealerPoints > 21) {
            player_cards_front.innerHTML += `<p>Has ganado! El dealer se pasó de los 21</p>`;
            bet_button_front.removeAttribute("disabled");
            endMatch();
            return;
          }

          getCardsToDealerWhenPLayerStand(--i);
        }, 2000);
      }

      if (playerPoints > dealerPoints && dealerPoints <= 16) {
        /* dealer_cards(); */
        getCardsToDealerWhenPLayerStand(9);
      }
    }
  };
  viewSecondDealerCard();

  setTimeout(() => {
    removeSecondCardDealerClass();
  }, 800);
});

bet_button_front.addEventListener("click", () => {
  hideBetButtons();
  bet_value_front.classList.add("bet-value-move");
  bet_value_items_front.classList.add("bet-value-items-move");
  player_money_front.innerHTML = `<p>${playerCash}</p>`;
  /* player_section_front.removeAttribute("hidden"); */
  showGameSection();
  newMatch();

  if (playerCards.length > 2 && playerPoints === 21) {
    player_cards_front.innerHTML += `<p>Has ganado! Sumaste 21!</p>`;
    playerCash += playerBet;
    player_money_front.innerHTML = `<p>${playerCash}</p>`;
    hit_button_front.setAttribute("disabled", "");
    stand_button_front.setAttribute("disabled", "");
    bet_button_front.removeAttribute("disabled");
    endMatch();
  }
  if (playerPoints > 21) {
    player_cards_front.innerHTML += `<p>Has perdido, pasaste los 21</p>`;
    hit_button_front.setAttribute("disabled", "");
    stand_button_front.setAttribute("disabled", "");
    bet_button_front.removeAttribute("disabled");
    playerCash -= playerBet;
    player_money_front.innerHTML = `<p>${playerCash}</p>`;
    endMatch();
  }
});
