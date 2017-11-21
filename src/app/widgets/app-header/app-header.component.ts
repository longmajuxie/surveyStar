import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { AuthenticationService } from '../../services/authentication.service'
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user;
  constructor(private auth: AuthenticationService) {
    this.user = this.auth.getUser();
  }

  ngOnInit() {

  }
  signOut() {
    this.auth.logOut();
    this.user = "";
  }
}
