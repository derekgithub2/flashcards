const chai = require('chai');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');


describe('Round', function () {

    let deck;
    let card1, card2, card3;
    let turn;
    let round;

    beforeEach(() => {
        card1 = new Card(1, 'What day is it?', ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], 'Tuesday')
        card2 = new Card(2, 'What is your name?', ['Jason', 'Charlie', 'Derek', 'Dylan'], 'Derek')
        card3 = new Card(3, 'What do you write with?', ['A baseball', 'A paperclip', 'an apple', 'a pencil'], 'a pencil')
        deck = [card1, card2, card3]
        turn = new Turn("yellow", card1)
        round = new Round (deck);

    })

    it('should return the current card being played', () => {
        
        round.returnCurrentCard()

        expect(round.returnCurrentCard()).to.deep.equal(round.deck[0])
    })

    it('should have a function, takeTurn, that updates turn count', () => {

        expect(round.turnCount).to.equal(0)

        round.takeTurn('Monday')
        
        expect(round.turnCount).to.equal(1)
    })

    it('should also evaulate guesses in this function', () => {

        round.takeTurn('Monday')

        expect(round.turn.evaluateGuess()).to.equal(false)
    })

    it('should also give feedback', () => {

        round.takeTurn('Monday')

        expect(round.turn.giveFeedback()).to.equal("Incorrect!")

        round.takeTurn('Tuesday')

        expect(round.turn.giveFeedback()).to.equal("Correct!")
    })

    it('should also store ids of incorrect guesses and store into an array of incorrect guesses', () => {

        expect(round.incorrectGuesses).to.be.an('array')
        expect(round.incorrectGuesses.length).to.equal(0)

        round.takeTurn('Monday')

        expect(round.incorrectGuesses.length).to.equal(1)
    })

    it('should have a method that calculates and returns the percentage of correct guesses', () => {

        round.takeTurn('Monday')

        round.calculatePercentCorrect()

        expect(round.calculatePercentCorrect()).to.equal(round.incorrectGuesses.length / round.turnCount * 100)
    })

    it('should have a method that prints the following to the console: ** Round over! ** You answered <>% of the questions correctly!', () => {

        round.takeTurn('Monday')
        round.calculatePercentCorrect()
        round.endRound()

        expect(round.endRound()).to.equal(`You answered ${round.incorrectGuesses.length / round.turnCount * 100}% of the questions correctly!`)
    })

})