import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})
export class AppComponent {
  title = 'Unsere Woche';
  constructor(public dataService: DataService) {}

}
