import { Card, TYPE, NUMBER } from "./card";

const
    { assert, expect, should }  = require("chai"), 
    mocha                       = require("mocha");

describe("Card Class Test", () => {

    it("Should throw error", () => {
        let card = Card.CardBuilder.build();

        expect(card).to.throw;
    });
    
    it("Should be okey", () => {
        let card = Card.CardBuilder
                        .type(TYPE.FLOUSS)
                        .number(NUMBER.ONE)
                        .build();

        expect(card).not.to.be.empty;
    });
});

describe("TYPE constant Test", () => {

    it("Should be 4 types", () => {
        expect(Object.values(TYPE)).to.be.lengthOf(4);
    });

});

describe("NUMBER constant Test", () => {

    it("Should be 10 numbers", () => {
        expect(Object.values(NUMBER)).to.be.lengthOf(10);
    });

});