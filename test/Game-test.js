const chai = require('chai');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function () {

    let game;
    let round;
    let cards = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }, {
        "id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array"
      }, {
        "id": 3,
        "question": "What type of prototype method directly modifies the existing array?",
        "answers": ["mutator method", "accessor method", "iteration method"],
        "correctAnswer": "mutator method"
      }]

    beforeEach(() => {

        round = new Round ()
        game = new Game (round)

    })

    it('should be instantiated with the currentRound', () => {
    })

    it('should be create new Cards', () => {
    })

    it('should be add cards to the a Deck', () => {
    })

})