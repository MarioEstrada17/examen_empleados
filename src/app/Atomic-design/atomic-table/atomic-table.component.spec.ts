import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicTableComponent } from './atomic-table.component';

describe('AtomicTableComponent', () => {
  let component: AtomicTableComponent;
  let fixture: ComponentFixture<AtomicTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomicTableComponent]
    });
    fixture = TestBed.createComponent(AtomicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
