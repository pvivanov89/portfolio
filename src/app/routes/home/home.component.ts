import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ViewSDKClient } from '../../services/view-sdk.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    public dataService: DataService,
    private viewSDKClient: ViewSDKClient,
    private activatedRoute: ActivatedRoute
    ) { }

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

    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
