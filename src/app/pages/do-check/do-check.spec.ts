import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheck } from './do-check';

describe('DoCheck', () => {
  let component: DoCheck;
  let fixture: ComponentFixture<DoCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoCheck],
    }).compileComponents();

    fixture = TestBed.createComponent(DoCheck);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
