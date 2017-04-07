import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDiscussionListComponent } from './topic-discussion-list.component';

describe('TopicDiscussionListComponent', () => {
  let component: TopicDiscussionListComponent;
  let fixture: ComponentFixture<TopicDiscussionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDiscussionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDiscussionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
