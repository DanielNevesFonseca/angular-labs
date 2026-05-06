import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonB } from './button-b';

describe('ButtonB', () => {
  let component: ButtonB;
  let fixture: ComponentFixture<ButtonB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonB],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
