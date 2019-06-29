import { Room } from "./room";

const
    { assert, expect, should }  = require("chai"), 
    mocha                       = require("mocha");

describe("Room Class Test", () => {

    it("Should exists", () => {
        let room = Room.RoomBuilder.build();

        expect(room).to.exist;
    });

    it("Should refuse wrong values", () => {
        let room = Room.RoomBuilder
                        .name(["Not a string"])
                        .players("Not an array")
                        .build();

        expect(room).a("Room");
        assert.equal(room.name,     "", "Take empty string when not given a string");
        assert.isString(room.name,      "Switch to an empty string");
        assert.equal(room.players,  [], "Take an empty array when not given an array");
        assert.isArray(room.players,    "Switch to an empty array");
    });
});