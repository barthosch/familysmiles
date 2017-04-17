import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.css']
})
export class SmileyComponent implements OnInit {

  @Input() smileValue: number;

  @Output() smileValueRotated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  rotateValue() {
    this.smileValueRotated.emit((this.smileValue + 1) % 3);
  }
}
