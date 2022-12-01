const Card = require('../src/Card');

class Deck {
    constructor (deckOfCards) {
        this.cards = deckOfCards || []
        // console.log(this.cards)

    }
    
    countCards () {
        return this.cards.length
    }
}

module.exports = Deck;