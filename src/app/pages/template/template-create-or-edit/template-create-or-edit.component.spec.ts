import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCreateOrEditComponent } from './template-create-or-edit.component';

describe('TemplateCreateOrEditComponent', () => {
  let component: TemplateCreateOrEditComponent;
  let fixture: ComponentFixture<TemplateCreateOrEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCreateOrEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCreateOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
