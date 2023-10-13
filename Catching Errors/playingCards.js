function playingCards(face, suit) {
  const validFaces = [
    "2",
    " 3",
    "4",
    " 5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const validSuits = ['S', 'H', 'D', 'C'];
  const spades = '\u2660';
  const hearts = '\u2665';
  const diamonds = '\u2666';
  const clubs = '\u2663';
  let card;
  if (!validFaces.includes(face)) {
    throw new Error('Invalid Face');
  }
  if (!validSuits.includes(suit)) {
    throw new Error('Invalid Suit');
  }

  for (const suits of validSuits) {
    if (suits === suit) {
      card = {
        face, suit,
        toString() {
          switch (suit) {
            case 'S': return `${this.face}${spades}`;
            case 'H': return `${this.face}${hearts}`;
            case 'D': return `${this.face}${diamonds}`;
            case 'C': return `${this.face}${clubs}`;
          }
        }
      }

    }
  }
  return toString;
}
playingCards("A", "S");
