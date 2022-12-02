const chai = require('chai');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function () {
    let deck
    let card1, card2, card3

    beforeEach (() => {
        card1 = new Card(1, 'What day is it?', ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], 'Tuesday')
        card2 = new Card(2, 'What is your name?', ['Jason', 'Charlie', 'Derek', 'Dylan'], 'Derek')
        card3 = new Card(3, 'What do you write with?', ['A baseball', 'A paperclip', 'an apple', 'a pencil'], 'a pencil')
        deck = new Deck ([card1, card2, card3])

    })

    it('should be initialized with an array of Card objects', () => {

        expect(deck).to.be.an.instanceOf(Deck)
    })

    it('should know how many cards are in the deck', () => {
        
        deck.countCards();

        expect(deck.countCards()).to.deep.equal(deck.cards.length)
    })
})