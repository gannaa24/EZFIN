import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import path from 'node:path';
import { BalanceComponent } from './dashboard/Features/balance/balance.component';
import { OverviewComponent } from './dashboard/Features/overview/overview.component';
import { UpcomingBillsComponent } from './dashboard/Features/upcoming-bills/upcoming-bills.component';
import { ExpensesComponent } from './dashboard/Features/expenses/expenses.component';
import { RevenuesComponent } from './dashboard/Features/revenues/revenues.component';
import { TransactionsComponent } from './dashboard/Features/transactions/transactions.component';
import { SettingsComponent } from './dashboard/Features/settings/settings.component';
import { GoalsComponent } from './dashboard/Features/goals/goals.component';


export const routes: Routes = [
    {path:'login',component:LoginComponent,title:'Login'},
    {path:'signup',component:SignupComponent,title:'signup'},
    {path:'forgotpass', component:ForgotpassComponent,title:'forgot password'},
    {path:'dashboard', component:DashboardComponent, title:'Dashboard',children:[
        {path:'overview',component:OverviewComponent},
        {path:'balance',component:BalanceComponent},
        {path:'upcoming',component:UpcomingBillsComponent},
        {path:'expenses',component:ExpensesComponent},
        {path:'goals',component:GoalsComponent},
        {path:'revenues',component:RevenuesComponent},
        {path:'transactions',component:TransactionsComponent},
        {path:'settings',component:SettingsComponent},
        {path:'',component:OverviewComponent},
    ]
    },
    {path:'',component:HomepageComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
