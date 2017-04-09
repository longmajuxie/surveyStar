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
      { path: '', redirectTo:'list/0', pathMatch:'full' },
      { path: 'list/:id', component:TopicDiscussionListComponent },
      { path: 'detail', component: TopicDiscussionDetailComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
