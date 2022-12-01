const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');

class Deck {
    constructor (deckOfCards) {
        this.cards = deckOfCards || []
    }
    
    countCards () {
        return this.cards.length
    }
}

module.exports = Deck;