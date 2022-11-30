const chai = require('chai');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Turn', function () {
    let turn;
    let card = new Card(1, "What color is the sky?", ['blue', 'green', 'yellow', 'red'], 'blue')

    beforeEach('turn instantiate a new turn', function () {
        turn = new Turn("yellow", card)
    })

    //it should be a function
    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    // it should instantiate turn class with two arguments: 1. user guess
    it('should instantiate the Turn class with a users guess', () => {
        expect(turn.userGuess).to.equal("yellow")
    })

    // 2. a Card object for the current card in play
    it('should instantiate a Card object for the current card in play', () => {
        expect(turn.currentCard).to.equal(card)
    })

    // it should returnGuess: a method that returns the guess
    // so this will test if the turn class has a function (returnGuess() that returns the users guess. )
    it('should return the users guess', () => {
        expect(turn.returnGuess(turn.userGuess)).to.equal("yellow")
    })

    //it should return the current card
    it('should return the current card', () => {
        expect(turn.returnCard(turn.currentCard)).to.equal(card)
    })

    // it should evaluate the users guess and return true or false
    it('should evaulte the users guess and return true or false depending if it matches the correct answer', () => {
        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(false)
    })

    //it should return either "incorrect!" or "correct!" based on whether the guess is correct or not
    it('should return either "incorrect!" or "correct!" based on whether the guess is correct or not', () => {
        turn.giveFeedback(turn.userGuess);

        //what do we expect here?
        expect(turn.giveFeedback()).to.equal(false)
    })

    
})