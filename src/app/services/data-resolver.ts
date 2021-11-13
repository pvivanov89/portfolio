import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataResolver implements Resolve<any> {
  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.fetchData();
  }
}
