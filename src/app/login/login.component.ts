import { Component } from '@angular/core';
import{AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink,RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private router: Router){}
  
  signupAuth= new FormGroup({
    email: new FormControl([],[Validators.required,Validators.email]),
    password: new FormControl([],[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
})

 savedData = localStorage.getItem('signupData');
 errMsg=""
checkData() {
  if (this.savedData) {
    const parsedData = JSON.parse(this.savedData);
  
    const enteredEmail = this.signupAuth.get('email')?.value;
    const enteredPassword = this.signupAuth.get('password')?.value;
  
    if (parsedData.email === enteredEmail && parsedData.password === enteredPassword) {
      console.log('Login successful!');
      this.router.navigate(['/dashboard']); // Navigate to the dashboard or any other route
      // You can navigate to dashboard or set a "loggedIn" flag etc
    } else {
      console.log('Invalid email or password');
      this.errMsg="Invalid email or password"
      this.signupAuth.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  } else {
    console.log('No signup data found. Please sign up first.');
    this.errMsg="No signup data found. Please sign up first."
  }
}

}
