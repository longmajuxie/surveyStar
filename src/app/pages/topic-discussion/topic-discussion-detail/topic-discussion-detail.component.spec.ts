import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDiscussionDetailComponent } from './topic-discussion-detail.component';

describe('TopicDiscussionDetailComponent', () => {
  let component: TopicDiscussionDetailComponent;
  let fixture: ComponentFixture<TopicDiscussionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDiscussionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDiscussionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
