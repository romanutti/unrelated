import { Component, OnInit } from '@angular/core';
import { BazService } from '../baz.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  eventStream$;

  constructor(private baz: BazService) {
    this.eventStream$ = baz.eventStream$;
  }

  ngOnInit() {}
}
