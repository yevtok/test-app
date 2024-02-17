import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswdStrengthComponent } from './passwd-strength.component';

describe('PasswdStrengthComponent', () => {
  let component: PasswdStrengthComponent;
  let fixture: ComponentFixture<PasswdStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswdStrengthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswdStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
