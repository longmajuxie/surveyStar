import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireTemplateListComponent } from './questionnaire-template-list.component';

describe('QuestionnaireTemplateListComponent', () => {
  let component: QuestionnaireTemplateListComponent;
  let fixture: ComponentFixture<QuestionnaireTemplateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireTemplateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
