import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueries } from './view-queries';

describe('ViewQueries', () => {
  let component: ViewQueries;
  let fixture: ComponentFixture<ViewQueries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQueries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQueries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
