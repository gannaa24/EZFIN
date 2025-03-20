import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent,title:'Login'},
    {path:'signup',component:SignupComponent,title:'signup'},
    {path:'forgotpass', component:ForgotpassComponent,title:'forgot password'},
    {path:'dashboard', component:DashboardComponent, title:'Dashboard'},
    {path:'',component:HomepageComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
