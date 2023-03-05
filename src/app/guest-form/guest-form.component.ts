import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Guest } from '../app.component';

@Component({
  selector: "guest-form",
  templateUrl: "./guest-form.component.html",
  styleUrls: ["./guest-form.component.css"]
})
export class GuestForm {
  @Output() onGuestAdded: EventEmitter<Guest> = new EventEmitter<Guest>();
  name: string = '';
  sDate!: Date|string;
  eDate!: Date|string;
  
  constructor() {}

  addGuest(){
    let guest: Guest | any = {};
    guest.name = this.name;
    guest.startDate = this.sDate;
    guest.endDate = this.eDate;
    this.onGuestAdded.emit(guest);
    this.name = this.sDate = this.eDate = '';
    
  }
}
