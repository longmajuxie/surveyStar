import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './topic-discussion.routes';

import { TopicDiscussionComponent } from './topic-discussion.component';
import { TopicDiscussionDetailComponent } from './topic-discussion-detail/topic-discussion-detail.component';
import { TopicDiscussionListComponent } from './topic-discussion-list/topic-discussion-list.component'
import { topicService } from '../../services/mock.topic'
import { topicDiscussionService } from './topic-discussion.service';
import {PercentPipe,Percent2Pipe} from './topic-discussion-detail/topic-discussion-detail.pipe'



@NgModule({
  imports: [CommonModule, routing],
  declarations: [
        TopicDiscussionComponent,
        TopicDiscussionDetailComponent,
        TopicDiscussionListComponent,
        PercentPipe,
        Percent2Pipe
     ],
  providers:[topicService]
})
export class TopicDiscussionModule {
}
