import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-embedded-project',
  templateUrl: './embedded-project.component.html',
  styleUrls: ['./embedded-project.component.scss']
})
export class EmbeddedProjectComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
