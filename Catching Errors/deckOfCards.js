function printDeckOfCards(cards) {
    function createCard(face, suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];
        if (!validFaces.includes(face)) {
            throw new Error(`No valid faces: ${face}`);
        }
        if (!validSuits.includes(suit)) {
            throw new Error(`No valid suits: ${suit}`);
        }
        const card = {
            face,
            suit,
            toString() {
                let currentSymbol;
                switch (suit) {
                    case 'S':
                        cardSymbol = '\u2660';
                        break;
                    case 'H':
                        cardSymbol = '\u2665'
                        break;
                    case 'D':
                        cardSymbol = '\u2666';
                        break;
                    case 'C':
                        cardSymbol = '\u2663';
                        break;
                    default:
                        currentSymbol = '';
                }
                return `${face}${cardSymbol}`
            }
        }
        return card.toString()
    }
    try {
        const deck = cards.map(card => {
            const face = card.slice(0, card.length - 1);
            const suit = card[card.length - 1];
            return createCard(face, suit).toString()
        })
        console.log(deck.join(' '));
    } catch (e) {
        console.log(`Invalid card: ${e.message}`);
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])