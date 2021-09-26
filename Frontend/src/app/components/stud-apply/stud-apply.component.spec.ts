import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudApplyComponent } from './stud-apply.component';

describe('StudApplyComponent', () => {
  let component: StudApplyComponent;
  let fixture: ComponentFixture<StudApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
