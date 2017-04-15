import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class DataService {
  familymembers$: FirebaseListObservable<any>;


  constructor(public af: AngularFire) {
    this.familymembers$ = af.database.list('/members');
    this.familymembers$.subscribe(console.log);


  }

  addMember(newName: any) {
    console.log("addMember " + newName);
    this.familymembers$.push(newName);
  }

  deleteMember(memberKey: any) {
    this.familymembers$.remove(memberKey);
    console.log("delete", memberKey);
  }
}
