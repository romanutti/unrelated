import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BazService {
  private state = new BehaviorSubject(false);
  public eventStream$ = this.state.asObservable();

  constructor() {}

  public toggle() {
    if (!this.state.value) {
      this.state.next(true);
      setTimeout((val) => {
        this.state.next(false);
      }, 1000);
    }
  }
}
