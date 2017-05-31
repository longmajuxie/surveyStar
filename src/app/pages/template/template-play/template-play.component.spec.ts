import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePlayComponent } from './template-play.component';

describe('TemplatePlayComponent', () => {
  let component: TemplatePlayComponent;
  let fixture: ComponentFixture<TemplatePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
