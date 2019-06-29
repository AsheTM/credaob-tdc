import { Settings } from "./settings";

const
    { assert, expect, should }  = require("chai"), 
    mocha                       = require("mocha");

describe("Settings Class Test", () => {

    it("Should exists", () => {
        let settings = Settings.SettingsBuilder.build();

        expect(settings).to.exist;
    });
    
});