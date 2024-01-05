import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
{
  path:'',redirectTo:'login',pathMatch:'full'
},
{
  path:'login',component:LoginComponent
},
{
  path:'home',component:HomeComponent
},
{
  path:'summary/:id',component:SummaryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
