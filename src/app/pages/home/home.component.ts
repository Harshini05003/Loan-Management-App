import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { Subscription, map, timeout } from 'rxjs';
import { icons } from 'src/app/models/icons';
import { homeDetails } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { UpdateApiService } from 'src/app/services/update-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private activated:ActivatedRoute,private api:ApiService,public load:LoaderService,private updateApi:UpdateApiService,private toaster:ToasterService,private messageService:MessageService){}
role:any;
homeDetails:homeDetails[]=[];
visible:boolean=false;
icons=icons;

ngOnInit(){
  this.getRole();
  this.getHomeDetails();
  this.updateApiCall();
  this.showToaster();
}
getRole(){
  this.activated.paramMap?.subscribe(response=>{
    this.role=response?.get('role');
  })
}
getCurrencySymbol(money:any){
  return `$${money}`;
}
getHomeDetails() {
  this.load?.showLoader();
  this.api?.getHomeDetails()?.pipe(
    map((response: any) => {
      return response.map((item:any) => {
        item.loan_amount = this.getCurrencySymbol(item?.loan_amount);
        item.loan_date=moment(new Date(item.loan_date)).format('YYYY-MM-DD');
        return item;
      });
    })
  )?.subscribe({
    next: (response:any) => {
      this.load.hideLoader();
      this.homeDetails=response;
    },
    error: (error) => {
      this.load.hideLoader();
      if(error.status=404)
      this.visible=true;
    }
  });
}
updateApiCall(){
  this.updateApi?.updateApiValue.subscribe((value)=>{
    if(value)
    {
      this.getHomeDetails();
    }
  })
}
showToaster(){
const subscription=this.toaster?.toaster$?.subscribe((value:any)=>{
    if(value)
    {  
       switch(value)
       {
        case 'approved':
          this.toaster?.showSuccessToaster();
          this.toaster?.toaster$.next('null');
          break;
        case 'progress':
          this.toaster?.showWaitToaster();
          this.toaster?.toaster$.next('null');
          break;
        case 'denied':
          this.toaster?.showDenyToaster();
          this.toaster?.toaster$.next('null');
          break;
       }
    }
  })
  subscription.unsubscribe();
}


}
