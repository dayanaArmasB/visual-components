import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifModalComponent } from './verif-modal.component';

describe('VerifModalComponent', () => {
  let component: VerifModalComponent;
  let fixture: ComponentFixture<VerifModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifModalComponent]
    });
    fixture = TestBed.createComponent(VerifModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
