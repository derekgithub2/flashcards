const Card = require('./Card');
const Deck = require('./Deck');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound
  }

  start () {
    let deckOfCards = new Deck(this.createCards(prototypeQuestions))
    let newRound = new Round(deckOfCards)

    this.printMessage(deckOfCards, newRound)
    this.printQuestion(newRound)
  }

  createCards(array) {
    return array.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;