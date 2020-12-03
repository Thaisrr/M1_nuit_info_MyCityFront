import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonentendeurComponent } from './abonentendeur.component';

describe('AbonentendeurComponent', () => {
  let component: AbonentendeurComponent;
  let fixture: ComponentFixture<AbonentendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonentendeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonentendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
