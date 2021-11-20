import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  scrollSub$ = new BehaviorSubject<any>(0);

  constructor() {
  }
}
