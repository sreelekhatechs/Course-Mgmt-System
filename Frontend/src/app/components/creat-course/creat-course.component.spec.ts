import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCourseComponent } from './creat-course.component';

describe('CreatCourseComponent', () => {
  let component: CreatCourseComponent;
  let fixture: ComponentFixture<CreatCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
