import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployDelete } from './employ-delete';

describe('EmployDelete', () => {
  let component: EmployDelete;
  let fixture: ComponentFixture<EmployDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
