import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fragment: string;
  isMenuCollapsed: boolean;

  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.fragment.pipe().subscribe(f => {
      this.fragment = f;
    })
  }

  ngOnInit(): void {
  }

}
