import { Injectable, OnInit } from '@angular/core';
import { SocketInterface } from './socket.interface';
// import { Room } from './socket.decorator';
import * as io from 'socket.io-client';

const CONFIG: any = {
  url: "http://localhost:3001", 
};

// let { checkRoom: CheckRoom } = Room;

@Injectable({
  providedIn: 'root'
})
export class SocketService implements SocketInterface, OnInit{
  
  private socket: any;

  private isConnected: boolean = false;

  constructor() {
    this.socket = io(CONFIG.url);
    this.socket.on('connect', () => {
      console.info('Connected to Socket.io!');
      this.isConnected = true;
    });
    this.socket.on('disconnect', () => {
      console.warn('Disconnected to Socket.io!');
      this.isConnected = false;
    });
  }
  
  ngOnInit(): void { }

  private checkConnection() {
    return this.isConnected;
  }

  // @CheckRoom()
  joinRoom(room: any): void {
    throw new Error("Method not implemented.");
  }

  // @CheckRoom()
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
