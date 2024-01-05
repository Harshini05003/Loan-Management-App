import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  ngOnInit(){
  }
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
  
 
  
}
