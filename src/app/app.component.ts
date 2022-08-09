import { Component } from '@angular/core';
import { CarsComponent } from './cars/cars.component';

@Component({
  selector: 'pp-root',
  template: `<div>
                <h1 class="title">{{pageTitle}}</h1>
                <pp-cars></pp-cars>
            </div>`,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageTitle: string = 'CarFinder.com';
}
