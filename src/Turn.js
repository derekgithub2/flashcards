const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');

class Turn {
    constructor (userGuess, card) {
        this.userGuess = userGuess
        this.currentCard = card
    }

    returnGuess () {
        return this.userGuess
    }

    returnCard () {
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
        if (this.userGuess === this.currentCard.correctAnswer) {
            return 'Correct!'
        } else {
            return 'Incorrect!'
        }
    }
    
}

module.exports = Turn;