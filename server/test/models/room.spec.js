import { Room } from "../../models/room";

const
    { assert, expect, should }  = require("chai");

describe("Room Class Test", () => {

    it("Should exists", () => {
        let room = Room.builder().build();

        expect(room).to.exist;
    });

    it("Should refuse wrong values", () => {
        let room = Room.builder()
                        .name(["Not a string"])
                        .players("Not an array")
                        .build();

        // expect(room).to.be.a("Room");
        assert.isString(room.name,      "Switch to a string");
        assert.isArray(room.players,    "Switch to an empty array when not given an array");
    });
});