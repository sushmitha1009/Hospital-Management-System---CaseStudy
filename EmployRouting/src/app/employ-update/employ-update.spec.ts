import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployUpdate } from './employ-update';

describe('EmployUpdate', () => {
  let component: EmployUpdate;
  let fixture: ComponentFixture<EmployUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
