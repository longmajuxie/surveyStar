import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class topicDiscussionService {
  // Observable string sources
  private tabIndex = new Subject<number>();
  // Observable string streams
  tabIndexCHanged$ = this.tabIndex.asObservable();
  // Service message commands
  changeTabMission(mission: number) {
    this.tabIndex.next(mission);
  }
}