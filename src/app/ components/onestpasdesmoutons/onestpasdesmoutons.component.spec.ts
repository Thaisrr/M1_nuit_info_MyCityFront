import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnestpasdesmoutonsComponent } from './onestpasdesmoutons.component';

describe('OnestpasdesmoutonsComponent', () => {
  let component: OnestpasdesmoutonsComponent;
  let fixture: ComponentFixture<OnestpasdesmoutonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnestpasdesmoutonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnestpasdesmoutonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
