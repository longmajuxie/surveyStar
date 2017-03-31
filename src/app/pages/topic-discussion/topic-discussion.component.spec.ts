import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDiscussionComponent } from './topic-discussion.component';

describe('TopicDiscussionComponent', () => {
  let component: TopicDiscussionComponent;
  let fixture: ComponentFixture<TopicDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
