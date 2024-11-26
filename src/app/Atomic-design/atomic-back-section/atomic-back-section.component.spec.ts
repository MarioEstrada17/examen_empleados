import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicBackSectionComponent } from './atomic-back-section.component';

describe('AtomicBackSectionComponent', () => {
  let component: AtomicBackSectionComponent;
  let fixture: ComponentFixture<AtomicBackSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomicBackSectionComponent]
    });
    fixture = TestBed.createComponent(AtomicBackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
