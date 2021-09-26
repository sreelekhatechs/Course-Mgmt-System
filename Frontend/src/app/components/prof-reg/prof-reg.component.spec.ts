import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfRegComponent } from './prof-reg.component';

describe('ProfRegComponent', () => {
  let component: ProfRegComponent;
  let fixture: ComponentFixture<ProfRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
