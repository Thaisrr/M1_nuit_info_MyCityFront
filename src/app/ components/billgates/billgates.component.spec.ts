import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillgatesComponent } from './billgates.component';

describe('BillgatesComponent', () => {
  let component: BillgatesComponent;
  let fixture: ComponentFixture<BillgatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillgatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillgatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
