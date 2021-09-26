import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScourseVwComponent } from './scourse-vw.component';

describe('ScourseVwComponent', () => {
  let component: ScourseVwComponent;
  let fixture: ComponentFixture<ScourseVwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScourseVwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScourseVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
