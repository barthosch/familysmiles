import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DataService {
  familymembers$: FirebaseListObservable<any>;


  constructor(public af: AngularFire) {
    this.familymembers$ = af.database.list('/members');
    this.familymembers$.subscribe(console.log);
  }

  addMember(newName: any) {
    console.log('addMember ' + newName);
    this.familymembers$.push({name: newName, icon: '', ratings: {
      monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0
    }});
  }

  deleteMember(member: any) {
    this.familymembers$.remove(member.$key);
    console.log('delete', member.$key);
  }

  setRating(member: any, rating: any) {
    console.log(member);
    console.log(this.familymembers$);
    member.ratings[rating.day] = rating.value;

    this.af.database.object('/members/' + member.$key).set(member);
  }
}
