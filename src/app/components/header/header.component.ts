import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavService } from '../../services/nav.service';

enum Sections {
  'def',
  'about',
  'portfolio',
  'resume',
  'contact'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fragment: string;
  isMenuCollapsed = true;
  inited;

  constructor(private activatedRoute: ActivatedRoute,
              private navService: NavService
  ) {
    this.navService.scrollSub$.subscribe(activeNumber => {
      if (!this.inited) {
        return;
      }
      this.fragment = activeNumber === 0 ? '' : Sections[activeNumber];
      if (history.pushState) {
        history.replaceState(null, null, this.fragment ? `#${this.fragment}` : '');
      } else {
        location.hash = this.fragment ? `#${this.fragment}` : '';
      }
    })

    this.activatedRoute.fragment.pipe().subscribe(f => {
      this.fragment = f;
    })
  }

  ngOnInit(): void {
    this.inited = true;
  }

}
