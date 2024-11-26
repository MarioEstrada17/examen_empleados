import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicButtonComponent } from './atomic-button.component';

describe('AtomicButtonComponent', () => {
  let component: AtomicButtonComponent;
  let fixture: ComponentFixture<AtomicButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomicButtonComponent]
    });
    fixture = TestBed.createComponent(AtomicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
