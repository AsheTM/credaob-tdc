export interface SocketServiceInterface {

    /**
     *  @description    Join a room
     */
    joinRoom(room: any): void;

    /**
     *  @description    Create a room
     */
    createRoom(): any;

    /**
     *  @description    Draw card
     */
    drawCard(): any;

    /**
     *  @description    Skip turn
     */
    skipTurn(): any;
    
}
