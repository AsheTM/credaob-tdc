/**
 *  @
 */
module.exports  = class Settings {

    constructor() { }

    static SettingsBuilder = class {
        
        constructor() {
            this.settings = new Settings();
        }
        
        /* */

        static build() {
            return this.settings;
        }
    }
}
