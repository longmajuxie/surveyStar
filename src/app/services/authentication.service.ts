import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable,OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions,RequestOptionsArgs,URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class AuthenticationService implements OnInit {


    ngOnInit(){}
    constructor(private http:Http, private storage:LocalStorageService) { }

    login(username, password) {
        return this.http.post('api/login/doLogin?userName='+username+'&password='+password, {})
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let result=JSON.parse(response["_body"]);
            if (result.result=="success") {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.storage.store('currentUser',result.user);
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
    signUp(userInfo){
        const params = new URLSearchParams();
        params.set('userName', userInfo.userName);
        params.set('password', userInfo.passWord);
        params.set('email', userInfo.email);
        return this.http.post('api/login/register', params)
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let result=JSON.parse(response["_body"]);
            if (result.result=="success") {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.storage.store('currentUser',result.user);
            }
        });
    }
    checkSignUpInfo(userInfo:any){
        let emailFilter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let errMsg="";
        if(userInfo.email==""){
            errMsg="邮箱不能为空";
        }else if(!emailFilter.test(userInfo.email)){
            errMsg="邮箱格式不正确";
        }else if(userInfo.userName==""){
            errMsg="用户名不能为空";
        }else if(userInfo.passWord==""||userInfo.rePassWord==""){
            errMsg="密码不能为空";
        }else if(userInfo.passWord!=userInfo.rePassWord){
            errMsg="两次密码不一致";
        }

        return errMsg;
    }
}
