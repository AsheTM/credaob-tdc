import { Injectable, OnInit } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { SocketInterface } from './socket.interface';
import { SocketDecorator } from './socket.decorator';

const CONFIG: SocketIoConfig = {
  url: "", 
  options: {}
};

let { checkRoom: CheckRoom } = SocketDecorator.Room;

@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket implements SocketInterface, OnInit{

  constructor(private socket: Socket) {
    super(CONFIG);
  }
  
  ngOnInit(): void { }

  @CheckRoom()
  joinRoom(room: any): void {
    throw new Error("Method not implemented.");
  }

  @CheckRoom()
  createRoom(): any {
    throw new Error("Method not implemented.");
  }
  
  drawCard(): any {
    throw new Error("Method not implemented.");
  }

  skipTurn(): any {
    throw new Error("Method not implemented.");
  }
}
