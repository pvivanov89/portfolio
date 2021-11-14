import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ViewSDKClient } from '../../services/view-sdk.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(public dataService: DataService, private viewSDKClient: ViewSDKClient) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      this.viewSDKClient.previewFile('pdf-div', {
        /* Pass the embed mode option here */
        embedMode: 'SIZED_CONTAINER'
      });
    });
  }
}
