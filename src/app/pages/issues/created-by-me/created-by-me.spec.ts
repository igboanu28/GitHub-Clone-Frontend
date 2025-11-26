import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedByMe } from './created-by-me';

describe('CreatedByMe', () => {
  let component: CreatedByMe;
  let fixture: ComponentFixture<CreatedByMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedByMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedByMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
