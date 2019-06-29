/**
 *  @
 */
const
    TYPE    = {
        FLOUSS: 1, 
        JBABAN: 2, 
        SYOUF: 3, 
        ZRAWAT: 4
    }, 
    NUMBER  = {
        ONE: 1, 
        TWO: 2, 
        THREE: 3, 
        FOUR: 4, 
        FIVE: 5,
        SIX: 6, 
        SEVEN: 7, 
        TEN: 10, 
        ELEVEN: 11, 
        TWELVE: 12
    }, 
    UNDEFINED = undefined, 
    POWER   = {};

class Card {

    power;

    constructor(type, number) {
        if(!type || !number)    throw new Error("Some attributes are missing!");
        this.id     = null;
        this.type   = type;
        this.number = number;
    }

    static CardBuilder = class {
        
        constructor() {
            this.card = new Card();
        }

        static id(id) {
            this.card.id = id;
            return this;
        }

        static type(type = null) {
            let valid = Object.values(TYPE).includes(type);
            this.card.type = valid && type || UNDEFINED;
            return this;
        }

        static number(number = null) {
            let valid = Object.values(NUMBER).includes(number);
            this.card.number = valid && number || UNDEFINED;
            return this;
        }

        // static power(power = null) {
        //     let valid;
        //     Card;
        // }

        static build() {
            if(!this.card.type || !this.card.number)   throw new Error("Some attributes are missing!");
            // this.card.power = null;
            return this.card;
        }
    }

    // set power() {
    //     this.power;
    // }

    get power() {
        return null;
    }
}

module.exports  = {
    Card, 
    TYPE, 
    NUMBER
}
