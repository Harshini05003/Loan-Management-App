import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { homeDetails } from 'src/app/models/interfaces';
import { ToasterService } from 'src/app/services/toaster.service';
import { UpdateApiService } from 'src/app/services/update-api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private route:Router,private updateApi:UpdateApiService,private toaster:ToasterService){}
  @Input()homeDetails:homeDetails[]=[];
  headers=['Loan Number','Borrower Name','Co-Borrower Name','Loan Date','Loan Amount','Loan Status','Status Reason'];
  keys=['loan_number','borrower_name','coborrower_name','loan_date','loan_amount','loan_status','status_reason'];
  headersExpanded=['Loan Type','Address','Cibil Score','Contact No.'];
  keysExpanded=['loan_type','address','cibil_score','contact_no'];
  singleArray:any=[' ']
  ngOnInit(){
  }
  expanded=true;
  navigateSummary(id:any){
    this.route?.navigate(['/summary',id]);
  }
  getStatusColor(status: string): string {
  switch (status) {
      case 'Approved':
          return 'green';
      case 'Denied':
          return 'red'; 
      case 'In Progress':
          return 'blue';
      default:
          return 'black';
  }
}

}
