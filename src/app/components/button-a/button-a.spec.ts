import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonA } from './button-a';

describe('ButtonA', () => {
  let component: ButtonA;
  let fixture: ComponentFixture<ButtonA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonA],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
