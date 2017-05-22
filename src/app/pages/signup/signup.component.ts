import { userInfo } from 'os';
import { Component,OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
	constructor(private auto:AuthenticationService , private router:Router){} 
	ngOnInit(){}
	ngOnDestroy(){}
	signUp(){
		this.errMsg=this.auto.checkSignUpInfo(this.userInfo);
		if(!this.errMsg){
			this.auto.signUp(this.userInfo).subscribe( 
            data => { 
                this.router.navigate(['/pages/home']);
            },
          // the second argument is a function which runs on error
            err => console.error(err),
      // the third argument is a function which runs on completion
            () => console.log('done loading')
        );
		}
	}
}
