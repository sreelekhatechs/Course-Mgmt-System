import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegVwComponent } from './reg-vw.component';

describe('RegVwComponent', () => {
  let component: RegVwComponent;
  let fixture: ComponentFixture<RegVwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegVwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
