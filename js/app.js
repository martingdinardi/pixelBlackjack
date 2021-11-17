let deck = [];

for (let i = 2; i < 11; i++) {
  for (let s = 0; s < 4; s++) {
    let suit = ["C", "D", "P", "T"];
    deck.push(`${i}${suit[s]}`);
  }
}

console.log(deck);
