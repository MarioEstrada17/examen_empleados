import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCommonQuestionComponent } from './dialog-common-question.component';

describe('DialogCommonQuestionComponent', () => {
  let component: DialogCommonQuestionComponent;
  let fixture: ComponentFixture<DialogCommonQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCommonQuestionComponent]
    });
    fixture = TestBed.createComponent(DialogCommonQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
