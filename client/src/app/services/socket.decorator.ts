export class Room {

    static checkRoom(str: string = "") {
        console.log("Checking if th room already exists!");
        return function(target: any, propertyKey: string) {
            console.log("Decorator sample!");
        }
    }

}

export class Player {

}

export class Card {
    
}
