import { Settings } from "./settings";

const
    { assert, expect, should }  = require("chai");

describe("Settings Class Test", () => {

    it("Should exists", () => {
        let settings = Settings.SettingsBuilder.build();

        expect(settings).to.exist;
    });
    
});