const chai = require('chai');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Turn', function () {
    let turn;
    let card = new Card(1, "What color is the sky?", ['blue', 'green', 'yellow', 'red'], 'blue')

    beforeEach(() => {
        turn = new Turn("yellow", card)
    })

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

    it('should instantiate the Turn class with a users guess', () => {
        expect(turn.userGuess).to.equal("yellow")
    })

    it('should instantiate a Card object for the current card in play', () => {
        expect(turn.currentCard).to.be.an.instanceOf(Card)
    })

    it('should return the users guess', () => {

        turn.returnGuess()

        expect(turn.returnGuess()).to.equal("yellow")
    })

    it('should return the current card', () => {

        turn.returnCard()

        expect(turn.returnCard()).to.equal(turn.currentCard)
    })

    it('should evalute the users guess and return true or false depending if it matches the correct answer', () => {

        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(false)
    })

    it('should return either "incorrect!" or "correct!" based on whether the guess is correct or not', () => {

        turn.giveFeedback(turn.userGuess);

        expect(turn.giveFeedback()).to.deep.equal('Incorrect!')
    })
})