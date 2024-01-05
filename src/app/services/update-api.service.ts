import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateApiService {

  constructor() { }
  updateApiValue=new Subject<boolean>();
}
