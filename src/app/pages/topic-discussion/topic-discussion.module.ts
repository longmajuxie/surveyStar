import { NgModule }      from '@angular/core';

import { CommonModule }  from '@angular/common';

import { routing }       from './topic-discussion.routes';

import { TopicDiscussionComponent } from './topic-discussion.component';



@NgModule({
  imports: [CommonModule, routing],
  declarations: [
        TopicDiscussionComponent,
     ]
})
export class TopicDiscussionModule {
}
