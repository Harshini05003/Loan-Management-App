import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { icons } from 'src/app/models/icons';
import { summaryDetails } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { UpdateApiService } from 'src/app/services/update-api.service';
@Component({
  selector: 'app-full-details',
  templateUrl: './full-details.component.html',
  styleUrls: ['./full-details.component.scss']
})
export class FullDetailsComponent {
[x: string]: any;
@Input() summaryDetails:summaryDetails[]=[];
@Input() role:any;
@Input() id:any;
toggleProgress:boolean=false;
toggleDeny:boolean=false;
icons=icons;
columns:any=[]
constructor(private api:ApiService,private messageService:MessageService,private route:Router,private updateApiCall:UpdateApiService,private toaster:ToasterService){}
  keys:any= [
    'loan_number', 'borrower_name', 'coborrower_name','loan_date','loan_amount','loan_type','address','cibil_score','contact_no','dob','income','job','assets','interest','coborrower_contact','coborrower_relation'
  ];
  headers:any=[
    'Loan Number','Borrower Name','Co-Borrower Name','Loan Date','Loan Amount','Loan Type','Address','Cibil Score','Contact No.','DOB','Income','Job','Assets','Interest Rate','Co-Borrower Contact','Co-Borrower Relation'
  ]
  updateData={
    loan_status:'',
    status_reason:'None'
  }
  reason:any;
  ngOnInit(){
  }
  navigateToaster(){
    this.getBack();
    this.updateApiCall.updateApiValue.next(true);
  }
  approve(){
    this.updateData.loan_status='Approved';
    this.updateStatus();
    this.toaster?.toaster$?.next('approved');
    this.navigateToaster();
  }
  deny(){
    this.updateData.loan_status='Denied';
    this.postReason();
    this.updateStatus();
    this.toaster?.toaster$?.next('denied');
    this.navigateToaster();
  }
  wait(){
    this.updateData.loan_status='In Progress';
    this.postReason();
    this.updateStatus();
    this.toaster.toaster$.next('progress');
    this.navigateToaster();
  }
  updateStatus(){
    this.api.putStatus(this.id,this.updateData).subscribe({
      next: (response)=>console.log('Updated Successfully'),
      error: (error)=>console.log(error)
    })
  }
  progressReason(){
    this.toggleProgress=!this.toggleProgress
    this.toggleDeny=false;
  }
  denyReason(){
    this.toggleDeny=!this.toggleDeny;
    this.toggleProgress=false;
  }
  postReason(){
    this.updateData.status_reason=this.reason;
  }
  getBack(){
    this.route?.navigate(['/home']);
  }
  exportPdf() {
    import('jspdf').then((jsPDF) => {
        import('jspdf-autotable').then((x) => {
            const doc = new jsPDF.default('p', 'px', 'a4');
            (doc as any).autoTable(this.headers,this.columns);
            doc.save('attachment.pdf');
        });
    });
}
}
