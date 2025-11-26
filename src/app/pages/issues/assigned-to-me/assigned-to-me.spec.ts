import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedToMe } from './assigned-to-me';

describe('AssignedToMe', () => {
  let component: AssignedToMe;
  let fixture: ComponentFixture<AssignedToMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedToMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedToMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
