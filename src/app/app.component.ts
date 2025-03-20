import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ForgotpassComponent } from "./forgotpass/forgotpass.component";
import { SignupComponent } from "./signup/signup.component";
import { HomepageComponent } from './homepage/homepage.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ForgotpassComponent, SignupComponent,HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EZfin';
}
