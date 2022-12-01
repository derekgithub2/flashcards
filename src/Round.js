const Turn = require("./Turn")
const Deck = require('./Deck');

class Round {
    constructor (deckOfCards) {
        this.turn = new Turn()
        this.deck = deckOfCards
        this.turnCount = 0
        this.incorrectGuesses = []
    }

    returnCurrentCard () {
        return this.deck[0]
    }

    takeTurn (userGuess) {
        this.turn = new Turn (userGuess, card)
        this.turnCount += 1
        this.turn.evaluateGuess()
        this.turn.giveFeedback()
        if (!this.turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.turn.userGuess)
        }
        return this.turnCount
    }

    calculatePercentCorrect () {
        return this.incorrectGuesses.length / this.turnCount * 100
    }

    endRound () {
        return `You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
    
}

module.exports = Round;