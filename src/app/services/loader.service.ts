import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private spinner:NgxSpinnerService) { }
  loader:boolean=false;
  showLoader(){
    this.spinner.show();
    this.loader=true;
  }
  hideLoader(){
    this.spinner.hide();
    this.loader=false;
  }
  loaderValue(){
    return this.loader;
  }
}
