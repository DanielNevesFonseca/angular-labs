import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChanges } from './on-changes';

describe('OnChanges', () => {
  let component: OnChanges;
  let fixture: ComponentFixture<OnChanges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnChanges],
    }).compileComponents();

    fixture = TestBed.createComponent(OnChanges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
