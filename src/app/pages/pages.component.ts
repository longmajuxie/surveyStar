import { Component, OnInit,HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class Pages implements OnInit {
public navIsFixed: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) {
   }

  ngOnInit() {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    //we'll do some stuff here when the window is scrolled
    let number = this.document.body.scrollTop;
    if (number > screen.availHeight) {
      this.navIsFixed = true;
    } else{
      this.navIsFixed = false;
    }
}
   public goTop(){
    window.scrollTo(0, 0)
   }

}
