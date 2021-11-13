import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  test: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/assets/html/ranking.html', {responseType: 'text'}).subscribe(r => {
      this.test = r;
    })
  }

}
