import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenComponents } from './children-components';

describe('ChildrenComponents', () => {
  let component: ChildrenComponents;
  let fixture: ComponentFixture<ChildrenComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildrenComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
