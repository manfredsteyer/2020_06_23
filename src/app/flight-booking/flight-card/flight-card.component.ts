import { Component, OnInit, Input, EventEmitter, Output, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Flight } from '../../model/flight';


@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;

  @Output() selectedChange = new EventEmitter<boolean>();


  constructor() { 
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit(): void {

    //this.selectedChange.next(true);
    this.selected = true;
    console.debug('ngOnInit', this.selected, this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {


    console.debug('ngOnChanges', this.selected, this.item);
  }

  ngOnDestroy(): void {
    console.debug('ngOnDestroy', this.selected, this.item);
  }


  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);

  }

}
