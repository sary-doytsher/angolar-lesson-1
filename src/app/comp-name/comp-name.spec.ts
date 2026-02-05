import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompName } from './comp-name';

describe('CompName', () => {
  let component: CompName;
  let fixture: ComponentFixture<CompName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
