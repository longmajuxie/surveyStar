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
      this.errMsg=this.storage.checkLoginMsg(this.userInfo.userName,this.userInfo.passWord);
      if(this.errMsg==""){
        this.storage.login(this.userInfo.userName,this.userInfo.passWord);
        this.storage.loginFake("123","456")
         this.router.navigate(['/pages/home']);
      }
    }

}
