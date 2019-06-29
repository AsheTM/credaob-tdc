import { Player } from "./room";

const
    { assert, expect, should }  = require("chai"), 
    mocha                       = require("mocha");

describe("Player Class Test", () => {

    it("Should exists", () => {
        let player = Player.PlayerBuilder.build();

        expect(player).to.exist;
    });

    it("Should refuse wrong values", () => {
        let player = Player.PlayerBuilder
                        .nickname(["Not a string"])
                        .cards("Not an array")
                        .build();

        expect(player).a("Player");
        assert.equal(player.nickname,       "",     "Take empty string when not given a string");
        assert.isString(player.nickname,            "Switch to an empty string");
        assert.equal(player.cards,          [],     "Take an empty array when not given an array");
        assert.isArray(player.cards,                "Switch to an empty array");
    });
});