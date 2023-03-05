import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hotel Meal Schedule';
  guestList: Guest[] = [];
  menuList: Menu[] = [];

  onGuestAdded(guest: any) {
    this.menuList = [];
    this.guestList.push(guest);
    this.guestList.map(item =>{
      let d = new Date(item.endDate);
      let startDate = new Date(item.startDate);
      while(d >= startDate){
        let newItem:Menu|any = {};
        newItem.name = '';
        newItem.date = '';
        newItem.name = item.name;
        newItem.date = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
        this.menuList.push(newItem);
        d.setDate(d.getDate() -1);
      }
    });
    
    this.sortData();
  }

  sortData() {
    return this.menuList.sort((b, a) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }
}

export interface Menu {
  date: Date | string;
  name: string;
}

export interface Guest {
  name: string;
  startDate: Date;
  endDate: Date;
}
