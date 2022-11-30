const chai = require('chai');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');


describe('Deck', function () {

    beforeEach('deck instantiate 3 new cards', function (){
        deck = new Deck ([card1, card2, card3])
        card1 = new Card(1, 'What day is it?', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'Tuesday')
        card1 = new Card(2, 'What is your name?', ['Jason', 'Charlie', 'Derek', 'Dylan'], 'Derek')
    })

    it.skip('should be a function', () => {
        expect(deck).to.be.a('function')
    })


})