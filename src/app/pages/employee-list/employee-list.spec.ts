import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnployeeList } from './employee-list';

describe('EnployeeList', () => {
  let component: EnployeeList;
  let fixture: ComponentFixture<EnployeeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnployeeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnployeeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
