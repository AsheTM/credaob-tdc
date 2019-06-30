/**
 *  @
 */
let { Card, TYPE, NUMBER }  = require("./card");

class Deck {

    constructor(numberDeck = 1) {
        let numbers         = Object.values(NUMBER), 
            types           = Object.values(TYPE), 
            numberLength    = Object.keys(TYPE).length, 
            typeLength      = Object.keys(NUMBER).length;
            
        const MAX_CARDS = numberLength * typeLength;

        this.cards = [];

        numberDeck = Number.isInteger(numberDeck) && numberDeck || 1;
        
        for(let i = 0; i < +numberDeck * MAX_CARDS; i++) {
            let card = Card.builder()
                            .id(i)
                            .type(types[+(i / MAX_CARDS).toFixed(0) % typeLength])
                            .number(numbers[+(i / MAX_CARDS).toFixed(0) % numberLength])
                            .build();

            this.cards.push(card);
        }
    }
}

module.exports  = {
    Deck
}
