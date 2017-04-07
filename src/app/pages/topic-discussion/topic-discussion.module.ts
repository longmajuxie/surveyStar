import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './topic-discussion.routes';

import { TopicDiscussionComponent } from './topic-discussion.component';

import { TopicDiscussionDetailComponent } from './topic-discussion-detail/topic-discussion-detail.component';
import { TopicDiscussionListComponent } from './topic-discussion-list/topic-discussion-list.component'



@NgModule({
  imports: [CommonModule, routing],
  declarations: [
        TopicDiscussionComponent,
        TopicDiscussionDetailComponent,
        TopicDiscussionListComponent,
     ]
})
export class TopicDiscussionModule {
}