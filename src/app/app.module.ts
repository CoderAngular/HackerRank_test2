
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GuestForm } from './guest-form/guest-form.component';
import { MealSchedule } from './meal-schedule/meal-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    MealSchedule,
    GuestForm
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
