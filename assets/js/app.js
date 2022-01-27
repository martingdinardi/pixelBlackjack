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
const double_button_front = document.querySelector(".double-button");

let playerCash = 500;
let playerBet = 0;
let asPlayerCards = [];
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

  shuffledDeck = _.shuffle(deck);
  /*
   */
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
    /* take_card(); */
    dealer_cards();
  }, 2200);
  /* take_card();
  take_card(); */
  setTimeout(() => {
    take_card();
    /* dealer_cards(); */
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
  /* doubleButtonAble(); */
  /* hit_button_front.removeAttribute("disabled");
  stand_button_front.removeAttribute("disabled"); */
  bet_button_front.setAttribute("disabled", "");
};

const goodLuckmessage = () => {
  setTimeout(() => {
    match_messages_front.removeAttribute("hidden", "");
    match_messages_front.innerHTML = `<div><img src="./assets/items/goodluck.png" class="goodLuckImg"/></div>`;
  }, 500);
  setTimeout(() => {
    match_messages_front.setAttribute("hidden", "");
    match_messages_front.innerHTML = ``;
    match_messages_front.style.backgroundColor = "rgba(0, 0, 0, 0.65)";
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
  bet_button_front.removeAttribute("hidden");
};

const hideMatchButtons = () => {
  hit_button_front.setAttribute("hidden", "");
  stand_button_front.setAttribute("hidden", "");
  double_button_front.setAttribute("hidden", "");
};

const showMatchButtons = () => {
  hit_button_front.removeAttribute("hidden");
  stand_button_front.removeAttribute("hidden");
  double_button_front.removeAttribute("hidden");
};

const matchButtonsDisabled = () => {
  hit_button_front.setAttribute("disabled", "");
  stand_button_front.setAttribute("disabled", "");
};

const matchButtonsAble = () => {
  hit_button_front.removeAttribute("disabled", "");
  stand_button_front.removeAttribute("disabled", "");
};

const doubleButtonAble = () => {
  double_button_front.removeAttribute("disabled", "");
};

const doubleButtonDisabled = () => {
  double_button_front.setAttribute("disabled", "");
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
  match_messages_front.setAttribute("hidden", "");
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
  }, 6000);
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
  /* player_cards_front.innerHTML += `<p>blackjack!!!</p>`; */
  setTimeout(() => {
    match_messages_front.removeAttribute("hidden", "");
    match_messages_front.innerHTML = `<img src="./assets/items/blackjack.png" class="blackjack">`;
  }, 1700);
  playerCash += playerBet * 2.5;
  matchButtonsDisabled();
  doubleButtonDisabled();
  bet_button_front.removeAttribute("disabled");
  player_money_front.innerHTML = `<p>${playerCash}</p>`;

  /* player_money_front.innerHTML = `<p>${playerCash}</p>`;

  bet_button_front.removeAttribute("disabled"); */
};

const lose = () => {
  if (playerPoints > 21) {
    setTimeout(() => {
      match_messages_front.removeAttribute("hidden", "");
      match_messages_front.innerHTML = `<img src="./assets/items/youlose.png" class="lose"><br>
      <h5>Pasaste los 21 my friend</h5>`;
    }, 1700);
  } else if (playerPoints < dealerPoints) {
    setTimeout(() => {
      match_messages_front.removeAttribute("hidden", "");
      match_messages_front.innerHTML = `<img src="./assets/items/youlose.png" class="lose"><br> 
      <h5>El dealer formó un número mayor a tus ${playerPoints}</h5>`;
    }, 1700);
  }
  matchButtonsDisabled();
  doubleButtonDisabled();
  bet_button_front.removeAttribute("disabled");
  player_money_front.innerHTML = `<p>${playerCash}</p>`;
};

const won = () => {
  if (playerPoints > dealerPoints) {
    setTimeout(() => {
      match_messages_front.removeAttribute("hidden", "");
      match_messages_front.innerHTML = `<img src="./assets/items/youwin.png" class="win"><br>
      <h5>Tienes mas puntos que el dealer</h5>`;
    }, 1700);
  } else if (dealerPoints > 21) {
    setTimeout(() => {
      match_messages_front.removeAttribute("hidden", "");
      match_messages_front.innerHTML = `<img src="./assets/items/youwin.png" class="win"><br>
      <h5>El dealer se pasó de los 21</h5>`;
    }, 1700);
  }
  matchButtonsDisabled();
  doubleButtonDisabled();
  bet_button_front.removeAttribute("disabled");
  player_money_front.innerHTML = `<p>${playerCash}</p>`;
};

const tie = () => {
  if (playerPoints === dealerPoints) {
    setTimeout(() => {
      match_messages_front.removeAttribute("hidden", "");
      match_messages_front.innerHTML = `<img src="./assets/items/tie.png" class="tie"><br>
      <h5>Tú y el dealer tienen los mismos puntos</h5>`;
    }, 1700);
  }
  matchButtonsDisabled();
  doubleButtonDisabled();
  bet_button_front.removeAttribute("disabled");
  playerCash += playerBet;
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

const playerWins = () => {
  bet_button_front.removeAttribute("disabled");
  playerCash += playerBet * 2;
  player_money_front.innerHTML = `<p>${playerCash}</p>`;
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
  if (card[0] === "A" && playerPoints < 11) {
    playerPoints += 11;
    playerCards.push(card);
    player_cards_front.innerHTML += `<img src="assets/cards/${
      playerCards[playerCards.length - 1]
    }.png" class="one-card dealing-player-card" />`;
    setTimeout(() => {
      removeDealClass();
    }, 800);
  } else if (playerPoints >= 11 && card[0] === "A") {
    playerPoints += 1;
    playerCards.push(card);
    player_cards_front.innerHTML += `<img src="assets/cards/${
      playerCards[playerCards.length - 1]
    }.png" class="one-card dealing-player-card" />`;
    playerCards.pop();
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
  if (player_cards_front.children.length === 2 && playerPoints === 21) {
    blackjack();

    endMatch();
  }
  if (
    (player_cards_front.children.length === 2 &&
      playerPoints === 9 &&
      playerBet * 2 <= playerCash + playerBet) ||
    (player_cards_front.children.length === 2 &&
      playerPoints === 10 &&
      playerBet * 2 <= playerCash + playerBet) ||
    (player_cards_front.children.length === 2 &&
      playerPoints === 11 &&
      playerBet * 2 <= playerCash + playerBet)
  ) {
    doubleButtonAble();
  }
  if (player_cards_front.children.length === 3) {
    doubleButtonDisabled();
  }
  if (player_cards_front.children.length === 2 && playerPoints != 21) {
    setTimeout(() => {
      matchButtonsAble();
    }, 1500);
  }
  if (playerPoints === 21) {
    hit_button_front.setAttribute("disabled", "");
  }
  if (
    (playerPoints > 21 && playerCards.includes("AT")) ||
    (playerPoints > 21 && playerCards.includes("AC")) ||
    (playerPoints > 21 && playerCards.includes("AD")) ||
    (playerPoints > 21 && playerCards.includes("AP"))
  ) {
    /*     console.log("good!");
     */ playerPoints -= 10;
    for (let i = 0; i < playerCards.length; i++) {
      if (
        playerCards[i].includes("AT") ||
        playerCards[i].includes("AC") ||
        playerCards[i].includes("AD") ||
        playerCards[i].includes("AP")
      ) {
        playerCards.splice(i, 1);
      }
    }
    //

    //
  } else if (
    (playerPoints > 21 && playerCash > 0 && !playerCards.includes("AT")) ||
    (playerPoints > 21 && playerCash > 0 && !playerCards.includes("AC")) ||
    (playerPoints > 21 && playerCash > 0 && !playerCards.includes("AP")) ||
    (playerPoints > 21 && playerCash > 0 && !playerCards.includes("AD"))
  ) {
    lose();
    endMatch();
  }

  // Aca se agrega el game over
  if (playerPoints > 21 && playerCash === 0) {
    lose();
    endMatch();
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
    /*     if ((dealerCards.length = 1 && playerPoints != 21)) {
      setTimeout(() => {
        matchButtonsAble();
        console.log("HOLA");
      }, 1500);
    } */
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
  setTimeout(() => {
    dealer_points_front.innerHTML = `${dealerPoints}`;
  }, 500);
  console.log(`dealer points ${dealerPoints}`);

  if (dealerPoints > 21) {
    /* player_cards_front.innerHTML += `<p>Has ganado! El dealer se pasó de los 21!</p>`; */
    /* match_messages_front.innerHTML += `<h3>Has ganado!</h3>
    <h5>El dealer se pasó de los 21!</h5>`; */
    /* bet_button_front.removeAttribute("disabled");
    playerCash += playerBet * 2;
    player_money_front.innerHTML = `<p>${playerCash}</p>`; */
    won();
    playerWins();

    endMatch();
  } else if (dealerPoints >= 17 && dealerPoints < playerPoints) {
    /* player_cards_front.innerHTML += `<p>Has ganado! Tienes un puntaje mayor al del dealer</p>`; */
    /* match_messages_front.innerHTML += `<h3>Has ganado!</h3>
    <h5>Tienes un puntaje mayor al del dealer</h5>`; */
    /* bet_button_front.removeAttribute("disabled");
    playerCash += playerBet * 2;
    player_money_front.innerHTML = `<p>${playerCash}</p>`; */
    won();
    playerWins();

    endMatch();
  } else if (dealerCards.length >= 2 && dealerPoints === playerPoints) {
    /* player_cards_front.innerHTML += `<p>Empate! El dealer también formó ${playerPoints} puntos</p>`; */
    /*   match_messages_front.innerHTML = `<h3>Empate!</h3>
    <h5>El dealer también formó ${playerPoints} puntos</h5>`;
    bet_button_front.removeAttribute("disabled");
    playerCash += playerBet;
    player_money_front.innerHTML = `<p>${playerCash}</p>`; */
    tie();
    endMatch();
  } else if (
    dealerCards.length >= 2 &&
    dealerPoints > playerPoints &&
    dealerPoints <= 21
  ) {
    /* player_cards_front.innerHTML += `<p>Has perdido! El dealer formó un número mayor a ${playerPoints}</p>`; */
    /* match_messages_front.innerHTML += `<h3>Has perdido!</h3>
    <h5>El dealer formó un número mayor a ${playerPoints}</h5>`; */
    lose();
    /* bet_button_front.removeAttribute("disabled"); */

    endMatch();
  }
};

hit_button_front.addEventListener("click", () => {
  setTimeout(() => {
    take_card();
  }, 1500);
  /* take_card(); */
});

double_button_front.addEventListener("click", () => {
  playerCash -= playerBet;
  player_money_front.innerHTML = `<p>${playerCash}</p>`;
  playerBet += playerBet;
  player_bet_front.innerHTML = `<p>${playerBet}</p>`;
  doubleButtonDisabled();
  setTimeout(() => {
    match_messages_front.removeAttribute("hidden", "");
    match_messages_front.innerHTML = `
    <h2>Doubble</h2>`;
  }, 100);
  setTimeout(() => {
    match_messages_front.setAttribute("hidden", "");
  }, 1200);
});

stand_button_front.addEventListener("click", () => {
  matchButtonsDisabled();
  doubleButtonDisabled();
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
      /* player_cards_front.innerHTML += `<p>Has ganado! Tienes un puntaje mayor al del dealer</p>`; */
      /* match_messages_front.innerHTML += `<h3>Has ganado!</h3>
    <h5>Tienes un puntaje mayor al del dealer</h5>`; */
      /* bet_button_front.removeAttribute("disabled");
      playerCash += playerBet * 2;
      player_money_front.innerHTML = `<p>${playerCash}</p>`; */
      won();
      playerWins();

      endMatch();
    } else if (dealerCards.length == 2 && dealerPoints > 21) {
      /* player_cards_front.innerHTML += `<p>Has ganado! El dealer se pasó de los 21</p>`; */
      /*  match_messages_front.innerHTML += `<h3>Has ganado!</h3>
    <h5>El dealer se pasó de los 21</h5>`; */
      /* bet_button_front.removeAttribute("disabled");
      playerCash += playerBet * 2;
      player_money_front.innerHTML = `<p>${playerCash}</p>`; */
      won();
      playerWins();

      endMatch();
    } else if (dealerCards.length === 2 && dealerPoints === playerPoints) {
      /* player_cards_front.innerHTML += `<p>Empate! El dealer también formó ${playerPoints} puntos</p>`; */
      /* match_messages_front.innerHTML = `<h3>Empate!</h3>
    <h5>El dealer también formó ${playerPoints} puntos</h5>`;
      bet_button_front.removeAttribute("disabled");
      playerCash += playerBet;
      player_money_front.innerHTML = `<p>${playerCash}</p>`; */
      tie();
      endMatch();
    } else if (
      dealerCards.length === 2 &&
      dealerPoints > playerPoints &&
      dealerPoints <= 21
    ) {
      /* player_cards_front.innerHTML += `<p>Has perdido! El dealer formó un número mayor a ${playerPoints}</p>`; */
      lose();
      /* bet_button_front.removeAttribute("disabled"); */

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

          if (card[0] === "A" && dealerPoints < 11) {
            dealerPoints += 11;
            getCardToDealer();
          } else if (dealerPoints >= 11 && card[0] === "A") {
            /* if (card[0] === "A") {
            dealerPoints += 11;
            getCardToDealer();
          }  */
            dealerPoints += 1;
            getCardToDealer();
            dealerCards.pop();
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
            won();
            playerWins();
            endMatch();
            return;
          }
          if (
            (dealerPoints > 21 && dealerCards.includes("AT")) ||
            (dealerPoints > 21 && dealerCards.includes("AC")) ||
            (dealerPoints > 21 && dealerCards.includes("AD")) ||
            (dealerPoints > 21 && dealerCards.includes("AP"))
          ) {
            /*     console.log("good!");
             */ dealerPoints -= 10;
            for (let i = 0; i < dealerCards.length; i++) {
              if (
                dealerCards[i].includes("AT") ||
                dealerCards[i].includes("AC") ||
                dealerCards[i].includes("AD") ||
                dealerCards[i].includes("AP")
              ) {
                dealerCards.splice(i, 1);
              }
            }
          } else if (dealerPoints === playerPoints) {
            tie();
            endMatch();
            return;
          } else if (dealerPoints <= 21 && dealerPoints > playerPoints) {
            /* player_cards_front.innerHTML += `<p>Has perdido! El dealer formó un número mayor a ${playerPoints}</p>`; */
            lose();
            /* bet_button_front.removeAttribute("disabled"); */
            endMatch();
            return;
          } else if (
            (dealerPoints > 21 && !dealerCards.includes("AT")) ||
            (dealerPoints > 21 && !dealerCards.includes("AC")) ||
            (dealerPoints > 21 && !dealerCards.includes("AP")) ||
            (dealerPoints > 21 && !dealerCards.includes("AD"))
          ) {
            won();
            playerWins();
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
  showGameSection();
  newMatch();

  if (player_cards_front.children.length > 2 && playerPoints === 21) {
    player_cards_front.innerHTML += `<p>Has ganado! Sumaste 21!</p>`;
    playerCash += playerBet;
    player_money_front.innerHTML = `<p>${playerCash}</p>`;
    hideMatchButtons();
    bet_button_front.removeAttribute("disabled");
    endMatch();
  }
  if (
    (playerPoints > 21 && playerCash > 0 && !playerCards.includes("AT")) ||
    (playerPoints > 21 && playerCash > 0 && !playerCards.includes("AC")) ||
    (playerPoints > 21 && playerCash > 0 && !playerCards.includes("AP")) ||
    (playerPoints > 21 && playerCash > 0 && !playerCards.includes("AD"))
  ) {
    /* player_cards_front.innerHTML += `<p>Has perdido, pasaste los 21 amigo</p>`; */
    lose();
    hideMatchButtons();
    bet_button_front.removeAttribute("disabled");
    playerCash -= playerBet;
    player_money_front.innerHTML = `<p>${playerCash}</p>`;
    endMatch();
  }
});
