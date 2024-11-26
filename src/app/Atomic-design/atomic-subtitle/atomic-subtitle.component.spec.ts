import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicSubtitleComponent } from './atomic-subtitle.component';

describe('AtomicSubtitleComponent', () => {
  let component: AtomicSubtitleComponent;
  let fixture: ComponentFixture<AtomicSubtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomicSubtitleComponent]
    });
    fixture = TestBed.createComponent(AtomicSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
