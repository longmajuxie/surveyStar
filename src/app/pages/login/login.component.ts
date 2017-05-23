import { userInfo } from 'os';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    
    
    userInfo={
      userName:"",
      passWord:""
    };
    errMsg="";
    constructor(private router:Router,private storage:AuthenticationService){}
    ngOnInit() {
        
    }

    doLogin() {
       
    }

    ngOnDestroy() {
      
    }
    login(){
      this.storage.loginFake("123","123");
      /*this.storage.login(this.userInfo.userName,this.userInfo.passWord).subscribe(
                    // the first argument is a function which runs on success
            data => { 
                this.router.navigate(['/pages/home']);
            },
          // the second argument is a function which runs on error
            err => console.error(err),
      // the third argument is a function which runs on completion
            () => console.log('done loading')
        );*/
    }
}
