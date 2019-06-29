import { Injectable, OnInit } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { SocketServiceInterface } from './socket.service.interface';
import { SocketServiceDecorator } from './socket.service.decorator';

const CONFIG: SocketIoConfig = {
  url: "", 
  options: {}
};

let { checkRoom: CheckRoom } = SocketServiceDecorator.Room;

@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket implements SocketServiceInterface, OnInit{

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
