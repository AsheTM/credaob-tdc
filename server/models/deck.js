/**
 *  @
 */
import { Card, TYPE, NUMBER } from "./card";

module.exports  = class Deck {

    cards = [];

    constructor(numberDeck = 1) {
        let numbers         = Object.values(NUMBER), 
            types           = Object.values(TYPE), 
            numberLength    = Object.keys(TYPE).length, 
            typeLength      = Object.keys(NUMBER).length;
            
        const MAX_CARDS = numberLength * typeLength;
        
        for(let i = 0; i < numberDeck * MAX_CARDS; i++) {
            let card = Card.CardBuilder
                            .id(i)
                            .type(types[+(i / MAX_CARDS).toFixed(0) % typeLength])
                            .number(numbers[+(i / MAX_CARDS).toFixed(0) % numberLength])
                            .build();

            this.cards.push(card);
        }
    }
}
