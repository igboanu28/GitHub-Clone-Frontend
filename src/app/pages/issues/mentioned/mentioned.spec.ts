import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentioned } from './mentioned';

describe('Mentioned', () => {
  let component: Mentioned;
  let fixture: ComponentFixture<Mentioned>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mentioned]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mentioned);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
