const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');

class Turn {
    constructor (userGuess, card) {
        this.userGuess = userGuess
        this.currentCard = card
    }

    returnGuess (guess) {
        this.userGuess = guess
        return this.userGuess
    }

    returnCard (card) {
        this.currentCard = card
        return this.currentCard
    }

    evaluateGuess () {
        if (this.userGuess === this.currentCard.correctAnswer) {
            return true
        } else {
            return false
        }
    }

    giveFeedback () {
        if (!this.evaluateGuess()) {
            // console.log('Incorrect!')
            return false
        } else {
            // console.log('Correct!')
            return true
        }
    }
    
}

module.exports = Turn;