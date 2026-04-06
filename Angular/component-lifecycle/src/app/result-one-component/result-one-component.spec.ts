import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOneComponent } from './result-one-component';

describe('ResultOneComponent', () => {
  let component: ResultOneComponent;
  let fixture: ComponentFixture<ResultOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultOneComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
