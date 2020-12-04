import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogilienComponent } from './logilien.component';

describe('LogilienComponent', () => {
  let component: LogilienComponent;
  let fixture: ComponentFixture<LogilienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogilienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogilienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
