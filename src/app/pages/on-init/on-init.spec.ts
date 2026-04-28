import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInit } from './on-init';

describe('OnInit', () => {
  let component: OnInit;
  let fixture: ComponentFixture<OnInit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnInit],
    }).compileComponents();

    fixture = TestBed.createComponent(OnInit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
