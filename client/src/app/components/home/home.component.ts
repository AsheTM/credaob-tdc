import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  private ownerRoom: StateRoom = false;

  constructor() { }

  ngOnInit() {
  }

  private isOwnerRoom(): boolean {
    return this.ownerRoom === true;
  }

  private isInsideRoom(): boolean {
    return this.insideRoom === true;
  }

  private createRoom(): void {
    this.ownerRoom = true;
    this.insideRoom = false;
  }

  private joinRoom(): void {
    this.insideRoom = true;
  }

  private returnToMenu(): void {
    this.ownerRoom = false;
    this.insideRoom = false;
  }

}

enum StateRoom {
  NO_ROOM, CREATE_ROOM, JOIN_ROOM, INSIDE_ROOM
}
