import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  data$ = this._data.asObservable();

  constructor(private http: HttpClient) {
  }

  fetchData(): Observable<any> {
    return this.http.get('/assets/data/data.json?cb=' + new Date().getTime()).pipe(
      take(1),
      tap(r => {
        this._data.next(r);
      })
    )
  }
}
