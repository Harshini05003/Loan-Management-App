import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { userCredentials } from 'src/app/models/credentials';
import { icons } from 'src/app/models/icons';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(private route:Router,private storage:StorageService){}
username:string='';
password:any;
role:any;
visible=false;
icons=icons;
navigateHome(role:any){
  this.role=role;
  if(this.username && this.password)
  this.checkValidation();
}
sendName(name:any){
  this.username=name;
 }
sendPassword(password:any){
  this.password=password;
}
checkValidation(){
  const valid=userCredentials.find((usercredentials:any)=>{
    return this.username===usercredentials.username && this.password===usercredentials.password;
  })
  if(valid){
    this.storage?.storeRole(this.role);
    this.storage?.storeValue(this.username);
    this.route?.navigate(['/home']);
  }
  else{
    console.log("Error"+valid);
    
    this.visible=true;
  }
}

}
