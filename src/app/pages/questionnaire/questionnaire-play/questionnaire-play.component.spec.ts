import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnairePlayComponent } from './questionnaire-play.component';

describe('QuestionnairePlayComponent', () => {
  let component: QuestionnairePlayComponent;
  let fixture: ComponentFixture<QuestionnairePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnairePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
