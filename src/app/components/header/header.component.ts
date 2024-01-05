import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { icons } from 'src/app/models/icons';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private storage:StorageService,private route:Router){}
  icons=icons
  name:any;
  ngOnInit(){
    this.getname();
  }
  getname(){
    this.name=this.storage?.getValue();
  }
  logOut(){
    this.storage?.removeValue();
    this.route?.navigate(['/login']);
    Swal.fire({
      title: 'Success',
      text: 'you are logged out successfully',
      icon: 'success',
      showCloseButton: true,
      showConfirmButton: false,
      timer: 2000 
    });
  }

}
