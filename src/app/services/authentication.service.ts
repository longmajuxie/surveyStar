import { userInfo } from 'os';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http, private storage:LocalStorageService) { }

    login(username: string, password: string) {
        return this.http.post('./api/authenticate', JSON.stringify({ username: username, password: password }))
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.storage.store('currentUser',user);
            }
        });
    }
    checkLoginMsg(userName:string,passWord:string){
        let errMsg="";
        if(userName==""){
            errMsg="用户名不能为空";
        }else if(passWord==""){
            errMsg="密码不能为空";
        }else if( 16 < passWord.length || passWord.length < 6){
            errMsg="密码必须为6-16位";
        }
        return errMsg;
    }
    loginFake(username: string, password: string) {
        return new Promise((resolve, reject) => {
            var user = {
                username:'StephenWeber',
                first_name:'Stephen',
                last_name:'Weber'
            };
            this.storage.store('currentUser',user);
            return resolve(user);
        });
    }

    getUser() {
        return this.storage.retrieve('currentUser');
    }

    logOut() {
        // remove user from local storage to log user out
        // localStorage.removeItem('currentUser');
        this.storage.clear('currentUser');
    }
    signUp(userInfo:any){
        return this.http.post('./api/authenticate', JSON.stringify({userInfo:userInfo}))
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.storage.store('currentUser',user);
            }
        });
    }
    checkSignUpInfo(userInfo:any){
        let emailFilter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let errMsg="";
        if(userInfo.email=""){
            errMsg="邮箱不能为空";
        }else if(emailFilter.test(userInfo.email)){
            errMsg="邮箱格式不正确";
        }else if(userInfo.userName=""){
            errMsg="用户名不能为空";
        }else if(userInfo.passWord==""||userInfo.rePassWord==""){
            errMsg="密码不能为空";
        }else if(userInfo.passWord!=userInfo.rePassword){
            errMsg="两次密码不一致";
        }

        return errMsg;
    }
}