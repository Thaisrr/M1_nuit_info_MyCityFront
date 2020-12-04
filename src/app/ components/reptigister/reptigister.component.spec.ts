import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptigisterComponent } from './reptigister.component';

describe('ReptigisterComponent', () => {
  let component: ReptigisterComponent;
  let fixture: ComponentFixture<ReptigisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReptigisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReptigisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
