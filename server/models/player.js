/**
 *  @
 */
class Player {

    constructor(id = null, nickname = "", cards = []) {
        this.id         = id;
        this.nickname   = String(nickname);
        this.cards      = Array.isArray(cards) && cards || [];
    }

    static builder() {
        return new PlayerBuilder();
    }
}

class PlayerBuilder {
        
    constructor() {
        this.player = new Player();
    }

    id(id) {
        this.player.id = id;
        return this;
    }

    nickname(nickname = "") {
        this.player.nickname = String(nickname);
        return this;
    }

    cards(cards = []) {
        let valid = Array.isArray(cards);
        this.player.cards = valid && cards || [];
        return this;
    }

    build() {
        return this.player;
    }
}

module.exports  = {
    Player
}
