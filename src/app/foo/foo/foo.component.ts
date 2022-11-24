import { Component, OnInit } from '@angular/core';
import { BazService } from 'src/app/baz.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent implements OnInit {
  constructor(private baz: BazService) {}

  ngOnInit() {}

  onChange() {
    this.baz.toggle();
  }
}
