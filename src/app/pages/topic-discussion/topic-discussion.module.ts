import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './topic-discussion.routes';

import { TopicDiscussionComponent } from './topic-discussion.component';

import { topicService } from '../../services/mock.topic'



@NgModule({
  imports: [CommonModule, routing],
  declarations: [
        TopicDiscussionComponent,
     ],
  providers: [topicService]
})
export class TopicDiscussionModule {
}
