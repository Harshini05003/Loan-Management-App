import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { map } from 'rxjs';
import { icons } from 'src/app/models/icons';
import { summaryDetails } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { LoaderService } from 'src/app/services/loader.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  constructor(private activated:ActivatedRoute,private api:ApiService,private storage:StorageService,public load:LoaderService){}
  id:any;
  summaryDetails:summaryDetails[]=[];
  visible:boolean=false;
  role:any;
  icons=icons;
  loaderValue:boolean=false;
  ngOnInit(){
   this.getId();
   this.getRole();
  }
  getId(){
    this.activated.paramMap?.subscribe((response)=>{
       this.id=response?.get('id');
       this.getSummaryDetails(this.id);
    })
  }
  getCurrencySymbol(money:any){
    return `$${money}`;
  }
  checkLoader(){
    this.load.loader$.subscribe((response:Boolean)=>{
      this.loaderValue=Boolean(response);
    })
  }
  getSummaryDetails(id:any){
    this.load?.showLoader();
    this.checkLoader();
    this.api?.getSummaryDetails(id)?.pipe(
      map((value:any)=>{
        value.dob=moment(new Date(value.dob)).format('DD-MM-YYYY');
        value.loan_date=moment(new Date(value.loan_date)).format('DD-MM-YYYY');
        value.income=this.getCurrencySymbol(value?.income);
        return value;
      })
    ).subscribe({
      next: (response:any)=>{
        this.load?.hideLoader();
        (this.summaryDetails=response)
      },
      error: (error)=>{
        this.load?.hideLoader();
        if(error.status===404)
        this.visible=true
      }
    })
  }
  getRole(){
    this.role=this.storage?.getRole();
  }
}
