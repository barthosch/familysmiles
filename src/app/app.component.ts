import { Component } from '@angular/core';
import { DataService } from './data.service';
import {Observable} from "rxjs";
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  familymembers$: FirebaseListObservable<any[]>;


  constructor(public data: DataService) {

    this.familymembers$ = data.familymembers$;
  }


  addMember(ev: any) {
    console.log(ev.target.value);
    this.data.addMember(ev.target.value);

  }

}
