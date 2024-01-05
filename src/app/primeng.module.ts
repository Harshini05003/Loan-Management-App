import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';
import { FormComponent } from "./components/form/form.component";
import { FullDetailsComponent } from "./components/full-details/full-details.component";
import { TableComponent } from "./components/table/table.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { SummaryComponent } from "./pages/summary/summary.component";
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from "./components/header/header.component";
import { TableModule } from 'primeng/table';
import { BrowserModule } from "@angular/platform-browser";
import { PanelModule } from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from "primeng/api";
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations:[
        LoginComponent,
        HomeComponent,
        SummaryComponent,
        FormComponent,
        TableComponent,
        FullDetailsComponent,
        HeaderComponent
    ],
    imports:[
     InputTextModule,
     PasswordModule,
     RadioButtonModule,
     FormsModule,
     ButtonModule,
     TableModule,
     BrowserModule,
     PanelModule,
     BrowserAnimationsModule,
     FileUploadModule,
     ProgressSpinnerModule,
     ProgressBarModule,
     ToastModule,
     DialogModule,
     TooltipModule,
     MessagesModule,
     ReactiveFormsModule,
     NgxSpinnerModule,
     NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    ],
    providers:[
       MessageService
    ],
    bootstrap:[
      AppComponent
    ]
})
export class primeNgModule{}