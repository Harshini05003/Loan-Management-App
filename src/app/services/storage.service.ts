import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  role=new BehaviorSubject<String>('null');
  constructor() { }
  storeValue(name:any){
    sessionStorage.setItem('username',name);
  }
  getValue(){
    return sessionStorage.getItem('username')
  }
  storeRole(role:any){
    sessionStorage.setItem('role',role)
  }
  getRole(){
    return sessionStorage.getItem('role');
  }
  removeValue(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role')
  }
  
}
