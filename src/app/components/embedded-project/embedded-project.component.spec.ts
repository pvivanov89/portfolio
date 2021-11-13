import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedProjectComponent } from './embedded-project.component';

describe('EmbeddedProjectComponent', () => {
  let component: EmbeddedProjectComponent;
  let fixture: ComponentFixture<EmbeddedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbeddedProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
