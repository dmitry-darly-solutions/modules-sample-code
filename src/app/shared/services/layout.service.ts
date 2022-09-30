import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public createElement: Subject<void> = new Subject();

  constructor() { }
}
