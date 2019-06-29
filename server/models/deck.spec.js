import { Card } from "./card";
import { Deck } from "./deck";

const
    { assert, expect, should }  = require("chai");

describe("Deck Class Test", () => {

    let deck = new Deck();

    it("Should contain 40 cards", () => {

        expect(deck.cards).to.be.lengthOf(40);
    });

    it("Should contain 120 cards with 3 decks", () => {
        let threeDeck = new Deck(3);

        expect(threeDeck.cards).to.be.lengthOf(120);
    });

    it("Should contain unique card in a deck", () => {
        // 
    });

});