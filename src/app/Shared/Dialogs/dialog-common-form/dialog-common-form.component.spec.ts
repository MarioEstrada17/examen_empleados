import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCommonFormComponent } from './dialog-common-form.component';

describe('DialogCommonFormComponent', () => {
  let component: DialogCommonFormComponent;
  let fixture: ComponentFixture<DialogCommonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCommonFormComponent]
    });
    fixture = TestBed.createComponent(DialogCommonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
