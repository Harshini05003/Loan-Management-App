import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output()emitName=new EventEmitter();
  @Output()emitRole=new EventEmitter();
  @Output()emitPassword=new EventEmitter();
  username:string='';
  role:string='';
  password:any;
  enable:boolean=false;
  // loginForm!: FormGroup;
  // socialUser!: SocialUser;
  // isLoggedin?: boolean;
  // google:any;
  constructor(private authService: SocialAuthService,private router:Router){}
  submit(){
    this.emitRole?.emit(this.role);
    this.emitName?.emit(this.username);
    this.emitPassword?.emit(this.password);
  }
  enableSubmit(){
    if(this.username.length>=3 && this.password.length>=3 && this.role)
    {
      this.enable=true;
    }
    else{
      this.enable=false;
    }
  }
  handleCredentialResponse(response:any) {
    console.log("Encoded JWT ID token: " + response.credential);}

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = user != null;
    //   console.log(this.socialUser);
    // });
  }
 
  
}
