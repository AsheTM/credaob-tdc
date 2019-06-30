import { Settings } from "../../models/settings";

const
    { assert, expect, should }  = require("chai");

describe("Settings Class Test", () => {

    it("Should exists", (done) => {
        let settings = Settings.builder().build();

        expect(settings).to.exist;
    });
    
});