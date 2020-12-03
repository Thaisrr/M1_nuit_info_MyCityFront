import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoussachonsComponent } from './noussachons.component';

describe('NoussachonsComponent', () => {
  let component: NoussachonsComponent;
  let fixture: ComponentFixture<NoussachonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoussachonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoussachonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
