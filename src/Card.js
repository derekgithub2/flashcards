const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Card {
    constructor (number, question, answers, correctAnswer) {
        this.number = number
        this.question = question
        this.answers = answers
        this.correctAnswer = correctAnswer
    }
}

module.exports = Card;