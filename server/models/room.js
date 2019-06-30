/**
 *  @
 */
import { Settings } from './settings';

class Room {

    constructor(id = null, name = "", players = [], settings = new Settings()) {
        this.id         = null;
        this.name       = String(name);
        this.players    = Array.isArray(players) && players || [];
        this.settings   = settings instanceof Settings && settings || new Settings();
    }

    static builder() {
        return new RoomBuilder();
    }
}

class RoomBuilder {
        
    constructor() {
        this.room = new Room();
    }

    id(id) {
        this.room.id = id;
        return this;
    }

    name(name = "") {
        this.room.name = String("");
        return this;
    }

    players(players = []) {
        let valid = Array.isArray(players);
        this.room.players = valid && players || [];
        return this;
    }

    settings(settings) {
        this.room.settings = settings;
        return this;
    }

    build() {
        return this.room;
    }
}

module.exports  = {
    Room
}
