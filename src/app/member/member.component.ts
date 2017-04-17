import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  @Input() member: any;

  @Output() ratingChanged = new EventEmitter<any>();

  weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  constructor() { }

  setRating(object: any) {
    this.ratingChanged.emit(object);
  }

  ngOnInit() {
  }

}
