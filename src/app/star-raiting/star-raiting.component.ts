import { Component, OnInit, OnChanges, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-raiting',
  templateUrl: './star-raiting.component.html',
  styleUrls: ['./star-raiting.component.css']
})
export class StarRaitingComponent implements OnInit, OnChanges {

  @Input() raiting: number ;
  starWidth: number ;
  @Output() raitingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }
  ngOnInit() {
  }

  ngOnChanges() {
    this.starWidth = this.raiting * 100 / 5;
  }
  onClick(): void {
    (this.raitingClicked.emit(`the raiting ${this.raiting} was clicked`)) ;
  }
}
