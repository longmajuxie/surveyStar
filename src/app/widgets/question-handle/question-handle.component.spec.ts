import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionHandleComponent } from './question-handle.component';

describe('QuestionHandleComponent', () => {
  let component: QuestionHandleComponent;
  let fixture: ComponentFixture<QuestionHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
