import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private messageService:MessageService) { }
  toasterValue$=new Subject<string>();
  toaster$=new BehaviorSubject<string>('null');
  showSuccessToaster(){
    setTimeout(()=>{
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Loan approved successfully' });
    },100)
    this.toasterValue$.next('show');
  }
  showWaitToaster(){
    setTimeout(()=>{
      this.messageService.add({ severity: 'info', summary: 'Wait', detail: 'Loan is in progress' });
    },500)
  }
  showDenyToaster(){
    setTimeout(()=>{
      this.messageService.add({ severity: 'error', summary: 'Deny', detail: 'Loan Denied' });
    },500)
  }
  clearService(){
    this.messageService.clear();
    this.toasterValue$.next('deny');
  }
}
