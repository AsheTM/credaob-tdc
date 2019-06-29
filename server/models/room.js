/**
 *  @
 */
module.exports  = class Room {

    constructor() { }

    static RoomBuilder = class {
        
        constructor() {
            this.room = new Room();
        }

        static id(id) {
            this.room.id = id;
            return this;
        }

        static name(name = "") {
            let valid = !!name.split;
            this.room.name = valid && name || "";
            return this;
        }

        static players(players = []) {
            let valid = Array.isArray(players);
            this.room.players = valid && players || [];
            return this;
        }

        static settings(settings) {
            this.room.settings = settings;
            return this;
        }

        static build() {
            return this.room;
        }
    }
}
