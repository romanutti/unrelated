import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BazService {
  private state = new BehaviorSubject(false);
  public eventStream$ = this.state.asObservable();

  constructor() {}

  public toggle() {
    this.state.next(!this.state);
  }
}
