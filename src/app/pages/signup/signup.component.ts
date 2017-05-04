import { userInfo } from 'os';
import { Component,OnInit, OnDestroy } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';

/**
*	This class represents the lazy loaded SignupComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'signup-cmp',
	templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit,OnDestroy {
	userInfo={
		email:"",
		userName:"",
		passWord:"",
		rePassWord:""
	};
	errMsg;
	constructor(private auto:AuthenticationService){} 
	ngOnInit(){}
	ngOnDestroy(){}
	signUp(){
		this.errMsg=this.auto.checkSignUpInfo(this.userInfo);
		if(!this.errMsg){
			this.auto.signUp(this.userInfo);
		}
	}
}
