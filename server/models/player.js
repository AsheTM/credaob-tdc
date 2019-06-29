/**
 *  @
 */
module.exports  = class Player {

    constructor() { }

    static PlayerBuilder = class {
        
        constructor() {
            this.player = new Player();
        }

        static id(id) {
            this.player.id = id;
            return this;
        }

        static nickname(nickname = "") {
            this.player.nickname = nickname.split && nickname || "";
            return this;
        }

        static cards(cards = []) {
            this.player.cards = Array.isArray(cards) && cards || [];
            return this;
        }

        static build() {
            return this.player;
        }
    }
}
