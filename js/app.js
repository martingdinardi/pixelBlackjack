let deck = [];
let playerPoints = 0;

let shuffle_deck = () => {
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
};

shuffle_deck();

let take_card = () => {
  let card = deck.pop();
  if (
    card[0] === "A" ||
    card[0] === "K" ||
    card[0] === "Q" ||
    card[0] === "J"
  ) {
    console.log(card);
    playerPoints += 11;
  } else {
    console.log(card);
    playerPoints += parseInt(card.substring(0, card.length - 1));
  }
  console.log(playerPoints);
};

take_card();
