import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private spinner:NgxSpinnerService) { }

  loader$=new BehaviorSubject<boolean>(false);
  showLoader(){
     this.loader$.next(true);
  }
  hideLoader(){
    this.loader$.next(false);
  }
 
  
}
