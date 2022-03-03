let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

// sounds

let dealing_card_sound = new Audio("./assets/media/dealingCard.mp3");
let lobby_sound = new Audio("./assets/media/lobby.mp3");
let chip_sound = new Audio("./assets/media/chip.mp3");
let bet_sound = new Audio("./assets/media/bet.mp3");
let casinoAmbience_sound = new Audio("./assets/media/casinoAmbience.mp3");
let pressedButton_sound = new Audio("./assets/media/pressedButton.mp3");
let win_sound = new Audio("./assets/media/win.mp3");
/* let lose_sound = new Audio("./assets/media/lose.mp3"); */
let double_sound = new Audio("./assets/media/double.mp3");
let songs_sound = new Audio("./assets/media/songs.mp3");

// variables

let len_eng = true;

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
const choose_lenguage_front = document.querySelector(".choose-lenguage");
const leng_es_front = document.querySelector(".len_es");
const leng_en_front = document.querySelector(".len_en");
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
const max_bet_button_front = document.querySelector(".maxbet");
const hit_button_front = document.querySelector(".hit-button");
const stand_button_front = document.querySelector(".stand-button");
const double_button_front = document.querySelector(".double-button");
const game_over_front = document.querySelector(".game-over");
const game_over_text = document.querySelector(".game-over-text");
const makeyourbet_front = document.querySelector(".makeyourbet");
const continue_button_container_front = document.querySelector(
  ".continue-button-container"
);
const yes_button_front = document.querySelector(".yes");
const no_button_front = document.querySelector(".no");

let pruebaDealerCards = () => {
  for (let i = 0; i < dealer_cards_front.children.length; i++) {
    if (
      dealerCards[i] == "AT" ||
      dealerCards[i] == "AC" ||
      dealerCards[i] == "AD" ||
      dealerCards[i] == "AP"
    ) {
      dealerCards.splice(i, 1);
    }
  }
};

const verifyPlayerName = () => {
  player_name = document.querySelector(".playerName").value;
  if (player_name.length >= 1) {
    continue_button_front.removeAttribute("disabled");
  }
  console.log(player_name);
};

let welcome_p_1 = [
  `¡Hello and welcome to BlackJack Casino!`,
  "¡The place to test your luck and multiply your wins!",
  "Who do we have the pleasure of talking to?",
];

let welcome_p_2 = [
  `We give you a bonus for 500 free chips!`,
  `Press start to start to play! and hey! First drink on the house! `,
];

/* <img src="assets/items/drink.gif" class="drink-ico" /> */
/* <img src="assets/items/fifty.png" class="chips-ico" /> */

let i = 0;
let j = 0;
let n = 0;
let z = 0;

const typeWriter = () => {
  if (i < welcome_p_1.length) {
    if (j < welcome_p_1[i].length) {
      welcome_p_front.innerHTML += welcome_p_1[i][j];
      j++;
      if (j == welcome_p_1[i].length && i != 2) {
        setTimeout(() => {
          welcome_p_front.innerHTML = ``;
          j = 0;
          i++;
        }, 1600);
      }
      if (i == 2) {
        setTimeout(() => {
          player_name_input_front.removeAttribute("hidden");
        }, 2550);
      }
    }
  }

  setTimeout(typeWriter, 48);
};

const typeStartGameWriter = () => {
  if (n < welcome_p_2.length) {
    if (z < welcome_p_2[n].length) {
      congrat_p_front.innerHTML += welcome_p_2[n][z];
      z++;
      console.log(`z = ${z} and loop is in ${welcome_p_2[n][z]} and n = ${n}`);
      if (z == welcome_p_2[n].length && n != 2) {
        setTimeout(() => {
          congrat_p_front.innerHTML = ``;
          z = 0;
          n++;
        }, 1600);
      }
      if (z == 39 && n == 1 && len_eng == true) {
        congrat_p_front.innerHTML += ` <img src="assets/items/fifty.png" class="chips-ico" />`;
      }
      if (z == 65 && n == 2 && len_eng == true) {
        congrat_p_front.innerHTML += ` <img src="assets/items/drink.gif" class="drink-ico" />`;
      }
      if (z == 46 && n == 1 && len_eng !== true) {
        congrat_p_front.innerHTML += ` <img src="assets/items/fifty.png" class="chips-ico" />`;
      }
      if (z == 77 && n == 2 && len_eng !== true) {
        congrat_p_front.innerHTML += ` <img src="assets/items/drink.gif" class="drink-ico" />`;
      }
    }
  }

  setTimeout(typeStartGameWriter, 48);
};

let welcome_p_front = document.querySelector(".welcome-p");
let congrat_p_front = document.querySelector(".congrat-p");

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

  /* shuffledDeck = [
    "2C",
    "2D",
    "2P",
    "2T",
    "3C",
    "3D",
    "3P",
    "3T",
    "4C",
    "4D",
    "4P",
    "4T",
    "5C",
    "5D",
    "5P",
    "5T",
    "6C",
    "6D",
    "6P",
    "6T",
    "7C",
    "7D",
    "7P",
    "7T",
    "8C",
    "8D",
    "8P",
    "8T",
    "9C",
    "9D",
    "9P",
    "9T",
    "10C",
    "10D",
    "10P",
    "10T",
    "JC",
    "JD",
    "JP",
    "JT",
    "QC",
    "QD",
    "QP",
    "7T",
    "JC",
    "8D",
    "10T",
    "AT",
    "10C",
  ]; */
  shuffledDeck = _.shuffle(deck);
  /*
   */
  /*
   */
  /* shuffledDeck = deck; */

  /*   shuffledDeck.pop();
  shuffledDeck.pop();
  shuffledDeck.pop();
  shuffledDeck.pop();
  shuffledDeck.pop(); */
  console.log(shuffledDeck);
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
    /* dealingCardSound.play(); */
    dealingCardSound();
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
    len_eng == true
      ? (match_messages_front.innerHTML = `<div><img src="./assets/items/goodluck.png" class="goodLuckImg"/></div>`)
      : (match_messages_front.innerHTML = `<div><img src="./assets/items/buenasuerte.png" class="buenasuerte"/></div>`);
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
  /*   pressedButton();
  lobby_sound.pause();
  casinoAmbience();
  initial_window_container_front.setAttribute("hidden", "");
  goodLuckmessage();
  startgame_button_front.setAttribute("hidden", "");
  setTimeout(() => {
    bet_section_front.removeAttribute("hidden");
  }, 2800); */
  startGamePressed();
});

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
  /* if (playerPoints > 21) { */

  if (playerCash > 0) {
    setTimeout(() => {
      match_messages_front.removeAttribute("hidden", "");
      len_eng == true
        ? (match_messages_front.innerHTML = `<img src="./assets/items/youlose.png" class="lose"><br>
        <h5>You have lost ${playerBet} chips</h5>`)
        : (match_messages_front.innerHTML = `<img src="./assets/items/hasperdido.png" class="hasperdido"><br>
        <h5>Has perdido ${playerBet} fichas</h5>`);
      /*     loseSound();
       */
    }, 1700);
    /* } else if (playerPoints < dealerPoints) {
      setTimeout(() => {
        match_messages_front.removeAttribute("hidden", "");
        match_messages_front.innerHTML = `<img src="./assets/items/youlose.png" class="lose"><br> 
        <h5>You have lost ${playerBet} chips</h5>`;
      }, 1700);
    } */
    matchButtonsDisabled();
    doubleButtonDisabled();
    bet_button_front.removeAttribute("disabled");
    player_money_front.innerHTML = `<p>${playerCash}</p>`;
    playerCards.splice(0, playerCards.length);
  } else {
    setTimeout(() => {
      match_messages_front.removeAttribute("hidden", "");
      len_eng == true
        ? (match_messages_front.innerHTML = `<img src="./assets/items/youlose.png" class="lose"><br>
        <h5>You have lost ${playerBet} chips</h5>`)
        : (match_messages_front.innerHTML = `<img src="./assets/items/hasperdido.png" class="lose"><br>
        <h5>Has perdido ${playerBet} fichas</h5>`);
      /*     loseSound();
       */
    }, 1700);
    /* } else if (playerPoints < dealerPoints) {
      setTimeout(() => {
        match_messages_front.removeAttribute("hidden", "");
        match_messages_front.innerHTML = `<img src="./assets/items/youlose.png" class="lose"><br> 
        <h5>You have lost ${playerBet} chips</h5>`;
      }, 1700);
    } */
    matchButtonsDisabled();
    doubleButtonDisabled();
    /* bet_button_front.removeAttribute("disabled"); */
    player_money_front.innerHTML = `<p>${playerCash}</p>`;
    playerCards.splice(0, playerCards.length);
    gameOver();
  }
};

const won = () => {
  if (playerPoints > dealerPoints) {
    setTimeout(() => {
      match_messages_front.removeAttribute("hidden", "");
      len_eng == true
        ? (match_messages_front.innerHTML = `<img src="./assets/items/youwin.png" class="win"><br>
      <h5>You have won ${playerBet} chips</h5>`)
        : (match_messages_front.innerHTML = `<img src="./assets/items/hasganado.png" class="hasganado"><br>
      <h5>Has ganado ${playerBet} fichas!</h5>`);
      winSound();
    }, 1700);
  } else if (dealerPoints > 21) {
    setTimeout(() => {
      match_messages_front.removeAttribute("hidden", "");
      len_eng == true
        ? (match_messages_front.innerHTML = `<img src="./assets/items/youwin.png" class="win"><br>
      <h5>You have won ${playerBet} chips</h5>`)
        : (match_messages_front.innerHTML = `<img src="./assets/items/hasganado.png" class="win"><br>
      <h5>Has ganado ${playerBet} fichas!</h5>`);
      winSound();
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
      len_eng == true
        ? (match_messages_front.innerHTML = `<img src="./assets/items/tie.png" class="tie"><br>
      <h5>Nobody won</h5>`)
        : (match_messages_front.innerHTML = `<img src="./assets/items/empate.png" class="empate"><br>
      <h5>Nadie ha ganado</h5>`);
      /*       tieSound();
       */
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

const dealingCardSound = () => {
  dealing_card_sound.play();
};

const lobbySound = () => {
  lobby_sound.play();
  lobby_sound.volume = 0.3;
  lobby_sound.loop = true;
};

const casinoAmbience = () => {
  casinoAmbience_sound.play();
  casinoAmbience_sound.volume = 0.15;
  casinoAmbience_sound.loop = true;
  songs_sound.play();
  songs_sound.volume = 0.2;
  songs_sound.loop = true;
};

const chipSound = () => {
  chip_sound.play();
  chip_sound.volume = 1;
};

const pressedButton = () => {
  pressedButton_sound.play();
};

const winSound = () => {
  win_sound.play();
  win_sound.volume = 0.3;
};

/* const loseSound = () => {
  lose_sound.play();
  lose_sound.volume = 0.09;
}; */

/* const tieSound = () => {
  tie_sound.play();
  tie_sound.volume = 0.25;
}; */

const doubleSound = () => {
  double_sound.play();
  double_sound.volume = 0.5;
};

const playAgain = () => {
  match_messages_front.style.backgroundColor = "transparent";
  game_over_front.setAttribute("hidden", "");
  playerCash = 500;
  player_money_front.innerHTML = `<p>${playerCash}</p>`;
  bet_value_front.classList.remove("bet-value-move");
  bet_value_items_front.classList.remove("bet-value-items-move");
  match_messages_front.setAttribute("hidden", "");
  hideCards();
  hideMatchButtons();
  restartBet();
  removeBets();
  removePoints();
  hideGameSection();
  goodLuckmessage();
  setTimeout(() => {
    showBetButtons();
  }, 3000);
};

const getCardsToDealerIfDealerPointsAreLessThanPlayerPoints = (i) => {
  if (i < 0) return;

  setTimeout(function () {
    let card = shuffledDeck.pop();
    // testing sound
    /* dealingCardSound.play(); */
    dealingCardSound();

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
      console.log(dealerCards);
    } else if (dealerPoints >= 11 && card[0] === "A") {
      dealerPoints += 1;
      getCardToDealer();
      console.log(dealerCards);
      dealerCards.pop();
    } else if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
      dealerPoints += 10;
      getCardToDealer();
      console.log(dealerCards);
    } else {
      dealerPoints += parseInt(card.substring(0, card.length - 1));
      getCardToDealer();
      console.log(dealerCards);
    }
    dealer_points_front.innerHTML = `${dealerPoints}`;
    console.log(`dealer points ${dealerPoints}`);

    if (
      (dealerPoints > 21 && dealerCards.includes("AT")) ||
      (dealerPoints > 21 && dealerCards.includes("AC")) ||
      (dealerPoints > 21 && dealerCards.includes("AD")) ||
      (dealerPoints > 21 && dealerCards.includes("AP"))
    ) {
      /*     console.log("good!");
       */ dealerPoints -= 10;
      dealer_points_front.innerHTML = `${dealerPoints}`;
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
    } else if (
      (dealerPoints >= 17 &&
        dealerCards.includes("AT") &&
        dealerPoints < playerPoints) ||
      (dealerPoints >= 17 &&
        dealerCards.includes("AC") &&
        dealerPoints < playerPoints) ||
      (dealerPoints >= 17 &&
        dealerCards.includes("AD") &&
        dealerPoints < playerPoints) ||
      (dealerPoints >= 17 &&
        dealerCards.includes("AP") &&
        dealerPoints < playerPoints)
    ) {
      /*     console.log("good!");
       */ dealerPoints -= 10;
      dealer_points_front.innerHTML = `${dealerPoints}`;
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
    } else if (
      (dealerPoints >= 17 &&
        dealerPoints < playerPoints &&
        !dealerCards.includes("AT")) ||
      (dealerPoints >= 17 &&
        dealerPoints < playerPoints &&
        !dealerCards.includes("AC")) ||
      (dealerPoints >= 17 &&
        dealerPoints < playerPoints &&
        !dealerCards.includes("AP")) ||
      (dealerPoints >= 17 &&
        dealerPoints < playerPoints &&
        !dealerCards.includes("AD"))
    ) {
      won();
      console.log("3");
      playerWins();
      endMatch();
      return;
    } else if (dealerPoints === playerPoints) {
      tie();
      endMatch();
      return;
    } else if (dealerPoints <= 21 && dealerPoints > playerPoints) {
      lose();
      endMatch();
      return;
    } else if (
      (dealerPoints > 21 && !dealerCards.includes("AT")) ||
      (dealerPoints > 21 && !dealerCards.includes("AC")) ||
      (dealerPoints > 21 && !dealerCards.includes("AP")) ||
      (dealerPoints > 21 && !dealerCards.includes("AD"))
    ) {
      won();
      console.log("4");
      playerWins();
      endMatch();
      return;
    }

    /* getCardsToDealerWhenPLayerStand */
    getCardsToDealerIfDealerPointsAreLessThanPlayerPoints(--i);
  }, 2000);
};

const pressStart = () => {
  pressedButton();
  lobbySound();
  len_eng !== true
    ? ((continue_button_front.innerHTML = `<h1>CONTINUAR ></h1>`),
      (welcome_p_1 = [
        `¡Hola y mucho gusto! Es un placer recibirte en BlackJack Casino!`,
        "¡El mejor lugar para probar tu suerte y multiplicar tus ganancias!",
        "¿Serías tan amable de brindarnos tu nombre?",
      ]),
      (welcome_p_2 = [
        `¡Has ganado nuestro bono de 500 fichas gratis!`,
        `Pulsa Jugar para comenzar a jugar! y hey! El primer trago lo invita la casa! `,
      ]))
    : (continue_button_front.innerHTML = `<h1>CONTINUE ></h1>`);
  /* typeWriter(); */
  setTimeout(() => {
    typeWriter();
  }, 1000);
  hideInitialsElements();
  showWelcomeElements();
  player_name_window_switch = true;
  player_name_input_front.setAttribute("autofocus", "");
};

const gameOver = () => {
  setTimeout(() => {
    game_over_front.removeAttribute("hidden");
    len_eng == true
      ? (game_over_text.innerHTML = `<h4>Play Again?</h4>`)
      : (game_over_text.innerHTML = `<h4>Quieres seguir jugando?</h4>`);
    game_over_front.classList.add("game-over-appears");
    match_messages_front.setAttribute("hidden", "");
  }, 5000);
};

const continuePressed = () => {
  player_name_window_switch = false;
  pressedButton();
  len_eng == true
    ? welcome_p_2.unshift(`Nice to meet you ${player_name} and
  CONGRATULATIONS!`)
    : welcome_p_2.unshift(`Gusto en conocerte ${player_name} y
  FELICIDADES!`);
  setTimeout(() => {
    typeStartGameWriter();
  }, 1000);
  /* verifyPlayerName(); */
  welcome_p_front.setAttribute("hidden", "");
  player_name_input_front.setAttribute("hidden", "");
  continue_button_front.setAttribute("hidden", "");
  len_eng !== true
    ? (startgame_button_front.innerHTML = `<h1>EMPEZAR JUEGO ></h1>`)
    : (startgame_button_front.innerHTML = `<h1>START GAME ></h1>`);
  startgame_button_front.removeAttribute("hidden");
  congrat_p_front.removeAttribute("hidden");
  setTimeout(() => {
    startgame_button_front.classList.add("startgame-button-animation");
    startgame_button_front.removeAttribute("disabled");
  }, 13000);
};

const startGamePressed = () => {
  len_eng == true
    ? (makeyourbet_front.innerHTML = `<img src="./assets/items/makeyourbet.png" />`)
    : (makeyourbet_front.innerHTML = `<img src="./assets/items/realizatuapuesta.png" class="realizatuapuesta" />`);
  pressedButton();
  lobby_sound.pause();
  casinoAmbience();
  initial_window_container_front.setAttribute("hidden", "");
  goodLuckmessage();
  startgame_button_front.setAttribute("hidden", "");
  setTimeout(() => {
    bet_section_front.removeAttribute("hidden");
  }, 2800);
};

// addEventListener

leng_es_front.addEventListener("click", () => {
  pressedButton();
  len_eng = false;
  press_start_text_front.innerHTML = `PRESIONA START`;
  choose_lenguage_front.setAttribute("hidden", "");
});

leng_en_front.addEventListener("click", () => {
  pressedButton();
  choose_lenguage_front.setAttribute("hidden", "");
});

document.addEventListener("keyup", (e) => {
  if (
    e.key == "Enter" &&
    player_name_window_switch === false &&
    player_name === undefined
  ) {
    /* hideInitialsElements();
    showWelcomeElements();
    player_name_window_switch = true;
    player_name_input_front.setAttribute("autofocus", ""); */
    /* pressedButton();
    lobbySound(); */
    /* typeWriter(); */
    /* setTimeout(() => {
      typeWriter();
    }, 1000);
    hideInitialsElements();
    showWelcomeElements();
    player_name_window_switch = true;
    player_name_input_front.setAttribute("autofocus", ""); */
    pressStart();
  } else if (
    e.key == "Enter" &&
    player_name_window_switch === true &&
    player_name !== undefined
  ) {
    /* hideWelcomeElements();
    showStartgameContainer();
    player_name_front.innerHTML = `${player_name}`; */
    /* player_name_window_switch = false;
    pressedButton();
    welcome_p_2.unshift(`Nice to meet you ${player_name} and
  CONGRATULATIONS!`);
    setTimeout(() => {
      typeStartGameWriter();
    }, 1000); */
    /* verifyPlayerName(); */
    /* welcome_p_front.setAttribute("hidden", "");
    player_name_input_front.setAttribute("hidden", "");
    continue_button_front.setAttribute("hidden", "");
    startgame_button_front.removeAttribute("hidden");
    congrat_p_front.removeAttribute("hidden"); */
    continuePressed();
  } else if (
    e.key == "Enter" &&
    player_name_window_switch === false &&
    player_name !== undefined &&
    startgame_button_front.attributes.length === 1
  ) {
    /* pressedButton();
    
    lobby_sound.pause();
    
    casinoAmbience();
    initial_window_container_front.setAttribute("hidden", "");
    goodLuckmessage();
    startgame_button_front.setAttribute("hidden", "");
    setTimeout(() => {
      bet_section_front.removeAttribute("hidden");
    }, 2800); */
    startGamePressed();
  }
});

yes_button_front.addEventListener("click", () => {
  /*   testRestart(); */
  playAgain();
});

press_start_text_front.addEventListener("click", () => {
  /* pressedButton();
  lobbySound(); */
  /* typeWriter(); */
  /* setTimeout(() => {
    typeWriter();
  }, 1000);
  hideInitialsElements();
  showWelcomeElements();
  player_name_window_switch = true;
  player_name_input_front.setAttribute("autofocus", ""); */
  pressStart();
});

continue_button_front.addEventListener("click", () => {
  /* pressedButton();
  welcome_p_2.unshift(`Nice to meet you ${player_name} and
  CONGRATULATIONS!`);
  setTimeout(() => {
    typeStartGameWriter();
  }, 1000); */
  /* verifyPlayerName(); */
  /* welcome_p_front.setAttribute("hidden", "");
  player_name_input_front.setAttribute("hidden", "");
  continue_button_front.setAttribute("hidden", "");
  startgame_button_front.removeAttribute("hidden");
  congrat_p_front.removeAttribute("hidden"); */

  /* player_name_front.innerHTML = `${player_name}`; */
  continuePressed();
});

fiftybet_button_front.addEventListener("click", () => {
  playerCash >= 50 && playerBet < 500
    ? ((playerBet += 50),
      /* chip_sound.play(), */
      chipSound(),
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
  /* chip_sound.play(); */
  playerCash >= 100 && playerBet < 450
    ? ((playerBet += 100),
      /* chip_sound.play(), */
      chipSound(),
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
  /* chip_sound.play(); */
  playerCash >= 200 && playerBet < 400
    ? ((playerBet += 200),
      chipSound(),
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

max_bet_button_front.addEventListener("click", () => {
  if (playerBet == 0 && playerCash <= 500 && playerCash !== 0) {
    playerBet += playerCash;
    playerCash -= playerCash;
    chipSound();
    bet_item_front.innerHTML += `<img src="assets/items/maxbet.png" class="new-chip"/>`;
  } else if (
    playerBet > 0 &&
    playerBet + playerCash <= 500 &&
    playerBet !== 500 &&
    playerCash !== 0
  ) {
    playerBet += playerCash;
    playerCash -= playerCash;
    chipSound();
    bet_item_front.innerHTML += `<img src="assets/items/maxbet.png" class="new-chip"/>`;
  } else if (playerBet > 0 && playerCash > 500 && playerBet !== 500) {
    let amount = 500 - playerBet; //// 400
    if (playerBet + amount >= 500) {
      playerCash -= amount;
      playerBet += amount;
    }
    chipSound();
    bet_item_front.innerHTML += `<img src="assets/items/maxbet.png" class="new-chip"/>`;
  } else if (
    playerBet > 0 &&
    playerCash <= 500 &&
    playerBet !== 500 &&
    playerCash !== 0
  ) {
    let amount = 500 - playerBet; //// 400
    if (playerBet + amount <= 500) {
      playerBet += amount;
      playerCash -= amount;
    }
    chipSound();
    bet_item_front.innerHTML += `<img src="assets/items/maxbet.png" class="new-chip"/>`;
  } else if (playerBet == 0 && playerCash > 500 && playerBet !== 500) {
    playerBet += 500;
    playerCash -= 500;
    chipSound();
    bet_item_front.innerHTML += `<img src="assets/items/maxbet.png" class="new-chip"/>`;
  }
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
  /* dealingCardSound.play(); */
  dealingCardSound();

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
    playerPoints -= 10;
    dealer_points_front.innerHTML = `${dealerPoints}`;
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
    /* gameOver(); */
  }

  setTimeout(() => {
    player_points_front.innerHTML = `${playerPoints}`;
  }, 500);
  console.log(`player points ${playerPoints}`);
};

const dealer_cards = () => {
  let card = shuffledDeck.pop();
  /* dealingCardSound.play(); */
  dealingCardSound();

  dealer_points_front.removeAttribute("hidden", "");
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
  setTimeout(() => {
    dealer_points_front.innerHTML = `${dealerPoints}`;
  }, 500);
  console.log(`dealer points ${dealerPoints}`);
  console.log(dealerCards);

  if (dealerPoints > 21) {
    won();
    playerWins();

    endMatch();
  } else if (dealerPoints >= 17 && dealerPoints < playerPoints) {
    won();
    playerWins();

    endMatch();
  } else if (dealerCards.length >= 2 && dealerPoints === playerPoints) {
    tie();
    endMatch();
  } else if (
    dealerCards.length >= 2 &&
    dealerPoints > playerPoints &&
    dealerPoints <= 21
  ) {
    lose();

    endMatch();
  }
};

hit_button_front.addEventListener("click", () => {
  setTimeout(() => {
    take_card();
  }, 700);
  /* take_card(); */
});

double_button_front.addEventListener("click", () => {
  playerCash -= playerBet;
  doubleSound();
  player_money_front.innerHTML = `<p>${playerCash}</p>`;
  playerBet += playerBet;
  player_bet_front.innerHTML = `<p>${playerBet}</p>`;
  doubleButtonDisabled();
  setTimeout(() => {
    match_messages_front.removeAttribute("hidden", "");
    match_messages_front.innerHTML = `<img src="./assets/items/doubledown.png" class="doubledown">`;
    /*
setTimeout(() => {
    match_messages_front.removeAttribute("hidden", "");
    match_messages_front.innerHTML = `<img src="./assets/items/blackjack.png" class="blackjack">`;
  }, 1700);

    */
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

    if (card[0] === "A" && dealerPoints <= 10) {
      dealerPoints += 11;
      console.log(dealerCards);
      console.log(dealerPoints);
    } else if (card[0] === "A" && dealerPoints >= 11) {
      dealerPoints += 1;
      console.log(dealerCards);
      console.log(dealerPoints);
    } else if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
      dealerPoints += 10;
      console.log(dealerCards);
      console.log(dealerPoints);
    } else {
      dealerPoints += parseInt(card.substring(0, card.length - 1));
      console.log(dealerCards);
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
      dealer_cards_front.children.length === 2 &&
      dealerPoints >= 17 &&
      dealerPoints < playerPoints &&
      !dealerCards.includes("AT") &&
      !dealerCards.includes("AC") &&
      !dealerCards.includes("AP") &&
      !dealerCards.includes("AD")
    ) {
      won();
      /* console.log("1"); */
      playerWins();

      endMatch();
    } else if (
      dealer_cards_front.children.length > 2 &&
      dealerPoints >= 17 &&
      dealerPoints < playerPoints &&
      !dealerCards.includes("AT") &&
      !dealerCards.includes("AC") &&
      !dealerCards.includes("AP") &&
      !dealerCards.includes("AD")
    ) {
      won();
      /* console.log("1"); */
      playerWins();

      endMatch();
    } else if (
      (dealer_cards_front.children.length === 2 &&
        dealerPoints >= 17 &&
        dealerPoints < playerPoints &&
        dealerCards.includes("AT")) ||
      (dealer_cards_front.children.length === 2 &&
        dealerPoints >= 17 &&
        dealerPoints < playerPoints &&
        dealerCards.includes("AC")) ||
      (dealer_cards_front.children.length === 2 &&
        dealerPoints >= 17 &&
        dealerPoints < playerPoints &&
        dealerCards.includes("AP")) ||
      (dealer_cards_front.children.length === 2 &&
        dealerPoints >= 17 &&
        dealerPoints < playerPoints &&
        dealerCards.includes("AD"))
    ) {
      dealerPoints -= 10;
      pruebaDealerCards();
      /*       for (let i = 0; i < dealer_cards_front.children.length; i++) {
        if (
          dealerCards[i].includes("AT") ||
          dealerCards[i].includes("AC") ||
          dealerCards[i].includes("AD") ||
          dealerCards[i].includes("AP")
        ) {
          dealerCards.splice(i, 1);
        }

      } */
      dealer_points_front.innerHTML = `${dealerPoints}`;
      /* dealer_cards(); */
      if (playerPoints > dealerPoints && dealerPoints <= 16) {
        /* dealer_cards(); */
        /* getCardsToDealerWhenPLayerStand(9); */
        getCardsToDealerIfDealerPointsAreLessThanPlayerPoints();
      }
    } else if (
      (dealer_cards_front.children.length === 2 &&
        dealerPoints > 21 &&
        !dealerCards.includes("AT")) ||
      (dealer_cards_front.children.length === 2 &&
        dealerPoints > 21 &&
        !dealerCards.includes("AC")) ||
      (dealer_cards_front.children.length === 2 &&
        dealerPoints > 21 &&
        !dealerCards.includes("AP")) ||
      (dealer_cards_front.children.length === 2 &&
        dealerPoints > 21 &&
        !dealerCards.includes("AD"))
    ) {
      won();
      console.log("2");
      playerWins();

      endMatch();
    } else if (
      dealer_cards_front.children.length === 2 &&
      dealerPoints === playerPoints
    ) {
      /* player_cards_front.innerHTML += `<p>Empate! El dealer también formó ${playerPoints} puntos</p>`; */
      /* match_messages_front.innerHTML = `<h3>Empate!</h3>
    <h5>El dealer también formó ${playerPoints} puntos</h5>`;
      bet_button_front.removeAttribute("disabled");
      playerCash += playerBet;
      player_money_front.innerHTML = `<p>${playerCash}</p>`; */
      tie();
      endMatch();
    } else if (
      dealer_cards_front.children.length === 2 &&
      dealerPoints > playerPoints &&
      dealerPoints <= 21
    ) {
      /* player_cards_front.innerHTML += `<p>Has perdido! El dealer formó un número mayor a ${playerPoints}</p>`; */
      lose();
      /* bet_button_front.removeAttribute("disabled"); */

      endMatch();
    } else if (
      dealer_cards_front.children.length === 2 &&
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
          dealingCardSound();
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

          if (
            (dealerPoints > 21 && dealerCards.includes("AT")) ||
            (dealerPoints > 21 && dealerCards.includes("AC")) ||
            (dealerPoints > 21 && dealerCards.includes("AD")) ||
            (dealerPoints > 21 && dealerCards.includes("AP"))
          ) {
            /*     console.log("good!");
             */ dealerPoints -= 10;
            dealer_points_front.innerHTML = `${dealerPoints}`;
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
          } else if (
            (dealerPoints >= 17 &&
              dealerCards.includes("AT") &&
              dealerPoints < playerPoints) ||
            (dealerPoints >= 17 &&
              dealerCards.includes("AC") &&
              dealerPoints < playerPoints) ||
            (dealerPoints >= 17 &&
              dealerCards.includes("AD") &&
              dealerPoints < playerPoints) ||
            (dealerPoints >= 17 &&
              dealerCards.includes("AP") &&
              dealerPoints < playerPoints)
          ) {
            /*     console.log("good!");
             */ dealerPoints -= 10;
            dealer_points_front.innerHTML = `${dealerPoints}`;
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
          }
          /* else */ if (
            dealerPoints >= 17 &&
            dealerPoints < playerPoints &&
            !dealerCards.includes("AT") /* ) ||
            (dealerPoints >= 17 &&
              dealerPoints < playerPoints  */ &&
            !dealerCards.includes("AC") /* ) ||
            (dealerPoints >= 17  &&
              dealerPoints < playerPoints */ &&
            !dealerCards.includes("AP") /* ) ||
            (dealerPoints >= 17 &&
              dealerPoints < playerPoints  */ &&
            !dealerCards.includes("AD")
          ) {
            won();
            console.log("3");
            playerWins();
            endMatch();
            return;
          } else if (dealerPoints === playerPoints) {
            tie();
            endMatch();
            return;
          } else if (dealerPoints <= 21 && dealerPoints > playerPoints) {
            lose();
            endMatch();
            return;
          } else if (
            (dealerPoints > 21 && !dealerCards.includes("AT")) ||
            (dealerPoints > 21 && !dealerCards.includes("AC")) ||
            (dealerPoints > 21 && !dealerCards.includes("AP")) ||
            (dealerPoints > 21 && !dealerCards.includes("AD"))
          ) {
            won();
            console.log("4");
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
  bet_sound.volume = 0.5;
  bet_sound.play();
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
