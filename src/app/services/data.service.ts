import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _data: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  data$ = this._data.asObservable();

  defaultLang = 'en';
  langs = ['en', 'de'];
  useLang = this.langs.find(x => navigator.language.indexOf(x) > 0)
    ? navigator.language : this.defaultLang;
  language$: BehaviorSubject<string> = new BehaviorSubject<string>(this.useLang);

  constructor(private http: HttpClient, private translateService: TranslateService) {
  }

  fetchData(): Observable<any> {
    return this.http.get<any>('/assets/data/data.json?cb=' + new Date().getTime()).pipe(
      take(1),
      map(r => {
        const lang = this.language$.getValue();
        Object.keys(r).forEach(key => {
          const value = r[key];
          if (value[lang]) {
            Object.keys(value[lang]).forEach(langKey => {
              value[langKey] = value[lang][langKey];
            })
          }
        })
        return r;
      }),
      tap(r => {
        this._data.next(r);
      })
    )
  }

  getLang(): string {
    return this.language$.getValue();
  }
}
