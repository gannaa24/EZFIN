import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import{AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
@Component({
  selector: 'app-signup',
  imports: [RouterLink, RouterLinkActive, RouterModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupAuth= new FormGroup({
    name: new FormControl([],[Validators.minLength(2),Validators.required,Validators.maxLength(30)]),
    email: new FormControl([],[Validators.required,Validators.email]),
    phone: new FormControl([],[Validators.required,Validators.pattern(/\d{3}\s?\d{4}-?\d{4}/)]),
    password: new FormControl([],[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword: new FormControl([],[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)])
},{validators:this.passwordMatchValidator})

passwordMatchValidator(control:AbstractControl){
 return control.get('password')?.value==control.get('rePassword')?.value?null:{mismatch:true}
}
}
