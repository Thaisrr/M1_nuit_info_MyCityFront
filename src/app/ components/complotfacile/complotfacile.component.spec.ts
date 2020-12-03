import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplotfacileComponent } from './complotfacile.component';

describe('ComplotfacileComponent', () => {
  let component: ComplotfacileComponent;
  let fixture: ComponentFixture<ComplotfacileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplotfacileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplotfacileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
