import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class DataService {
  familymembers$: FirebaseListObservable<any>;


  constructor(public af: AngularFire) {
    this.familymembers$ = af.database.list('/members');
    this.familymembers$.subscribe(console.log);
  }



}
