const chai = require('chai');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

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

    it('should evalute the users guess', () => {

        turn.evaluateGuess();

        expect(turn.evaluateGuess()).to.equal(false)
    })

    it('should return either "incorrect!" or "correct!" based on the user input', () => {

        turn.giveFeedback(turn.userGuess);

        expect(turn.giveFeedback()).to.deep.equal('Incorrect!')
    })
})