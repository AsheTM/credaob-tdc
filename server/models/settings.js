/**
 *  @
 */
class Settings {

    constructor() { }

    static builder(){
        return new SettingsBuilder();
    }
}

class SettingsBuilder {
    
    constructor() {
        this.settings = new Settings();
    }
    
    /* */

    build() {
        return this.settings;
    }
}

module.exports  = {
    Settings
}
