import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptilianprofileComponent } from './reptilianprofile.component';

describe('ReptilianprofileComponent', () => {
  let component: ReptilianprofileComponent;
  let fixture: ComponentFixture<ReptilianprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReptilianprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReptilianprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
