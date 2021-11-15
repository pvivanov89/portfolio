import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _apiData: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  private _data: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  data$ = this._data.asObservable();

  constructor(private http: HttpClient, private translateService: TranslateService) {
  }

  fetchData(): Observable<any> {
    return this.http.get<any>('/assets/data/data.json?cb=' + new Date().getTime()).pipe(
      take(1),
      map(r => {
        this._apiData.next({...r});
        return this.mapTranslations(r, 'en');
      }),
      tap(r => {
        this._data.next(r);
      })
    )
  }

  mapTranslations(data: any, lang: string) {
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
        data[key].map(el => {
          return this.mapKeys(el, lang);
        })
      } else {
        data[key] = this.mapKeys(data[key], lang);
      }
    })
    return data;
  }

  mapKeys(value: any, lang: string) {
    if (value[lang]) {
      Object.keys(value[lang]).forEach(langKey => {
        value[langKey] = value[lang][langKey];
      })
    }
    return value;
  }

  getProjectByName(name: string): any {
    return this._data.getValue().projects?.find(x => x.name === name) || null;
  }
}
