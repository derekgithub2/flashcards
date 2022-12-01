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
        deck = new Deck ([card1, card2, card3])
        turn = new Turn("yellow", card1)
        round = new Round ();
    })

    it('should return the current card being played', () => {

        round.returnCurrentCard()
        // console.log(deck.cards[0])

        expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0])

    })

    it('should update turn count', () => {
        // takeTurn method
    })

    it('should evaluate guesses', () => {
        // takeTurn method
    })

    it('should give feedback', () => {
        // takeTurn method
    })

    it('should store ids of incorrect guesses and store into a new array', () => {
        // takeTurn method
    })

})