import { Component, Input, OnInit } from "@angular/core";
import { Guest, Menu } from '../app.component';

@Component({
  selector: "meal-schedule",
  templateUrl: "./meal-schedule.component.html",
  styleUrls: ["./meal-schedule.component.css"]
})
export class MealSchedule implements OnInit {
  @Input() menuList: Menu[] = [];

  ngOnInit() {

  }
}
