import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTwoComponent } from './result-two-component';

describe('ResultTwoComponent', () => {
  let component: ResultTwoComponent;
  let fixture: ComponentFixture<ResultTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultTwoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultTwoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
