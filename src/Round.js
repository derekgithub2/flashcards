const Turn = require("./Turn")

class Round {
    constructor (deckOfCards) {
        this.deck = deckOfCards
        this.turnCount = 0
        this.incorrectGuesses = []
    }

    returnCurrentCard () {
        return this.deck.cards[0]
    }

    takeTurn (userGuess) {
        this.turn = new Turn (userGuess, this.deck.cards[0])
        this.turnCount += 1
        this.turn.evaluateGuess()
        this.turn.giveFeedback()
        if (this.turn.evaluateGuess() === false) {
            this.incorrectGuesses.push(this.deck.cards[0].id)
        }
        this.deck.cards.shift()
        return this.turn.giveFeedback()
    }

    calculatePercentCorrect () {
        return this.incorrectGuesses.length / this.turnCount * 100
    }

    endRound () {
        console.log(`You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
}

module.exports = Round;