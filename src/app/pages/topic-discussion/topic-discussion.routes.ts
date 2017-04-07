import { Routes, RouterModule }  from '@angular/router';

import { TopicDiscussionComponent } from './topic-discussion.component';
import { TopicDiscussionListComponent } from './topic-discussion-list/topic-discussion-list.component'
import { TopicDiscussionDetailComponent } from './topic-discussion-detail/topic-discussion-detail.component'
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path:'',
    component: TopicDiscussionComponent,
    children: [
      { path: 'topic-discussion', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component:TopicDiscussionListComponent },
      { path: 'detail', component: TopicDiscussionDetailComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);