import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hotel Meal Schedule';
  guestList: Guest[] = [];

  onGuestAdded(guest: any) {
    this.guestList.push(guest);
    this.sortData();
  }

  sortData() {
    return this.guestList.sort((b, a) => {
      return <any>new Date(b.startDate) - <any>new Date(a.startDate);
    });
  }
}

export interface Guest {
  name: string;
  startDate: Date;
  endDate: Date;
}
