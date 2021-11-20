import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('about') aboutEl: ElementRef;
  @ViewChild('portfolio') portfolioEl: ElementRef;
  @ViewChild('resume') resumeEl: ElementRef;
  @ViewChild('contact') contactEl: ElementRef;

  public currentActive = 0;
  public aboutOffset: Number = null;
  public portfolioOffset: Number = null;
  public resumeOffset: Number = null;
  public contactOffset: Number = null;

  constructor(
    public dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private navService: NavService
    ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.aboutOffset = this.aboutEl.nativeElement.offsetTop;
    this.portfolioOffset = this.portfolioEl.nativeElement.offsetTop;
    this.resumeOffset = this.resumeEl.nativeElement.offsetTop;
    this.contactOffset = this.contactEl.nativeElement.offsetTop;

    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment && document.getElementById(fragment) != null) {
        document.getElementById(fragment).scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.portfolioOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset >= this.portfolioOffset && window.pageYOffset < this.resumeOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.resumeOffset && window.pageYOffset < this.contactOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.contactOffset) {
      this.currentActive = 4;
    } else {
      this.currentActive = 0;
    }
    this.navService.scrollSub$.next(this.currentActive);
  }
}
