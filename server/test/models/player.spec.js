import { Player } from "../../models/player";

const
    { assert, expect, should }  = require("chai");

describe("Player Class Test", () => {

    it("Should exists", () => {
        let player = Player.builder().build();

        expect(player).to.exist;
    });

    it("Should refuse wrong values", () => {
        let player = Player.builder()
                        .nickname(["Not a string"])
                        .cards("Not an array")
                        .build();

        // expect(player).to.be.a("Player");
        assert.isString(player.nickname,    "Switch to a string");
        assert.isArray(player.cards,        "Switch to an empty array when not given an array");
    });
});