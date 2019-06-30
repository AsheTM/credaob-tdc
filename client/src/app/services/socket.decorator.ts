export namespace SocketDecorator {

    export namespace Room {

        export function checkRoom(str: string = "") {
            console.log("Checking if th room already exists!");
            return function(target: any, propertyKey: string) {
                console.log("Decorator sample!");
            }
        }

    }

    export namespace Player {

    }

    export namespace Card {
        
    }

}

