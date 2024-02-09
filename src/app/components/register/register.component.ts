import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatToolbar} from "@angular/material/toolbar";
import {NgIf} from "@angular/common";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatButton,
    MatInput,
    MatIcon,
    MatFormField,
    ReactiveFormsModule,
    MatToolbar,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  fieldRequired: string = "This field is required"
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registerForm = new FormGroup(
      {
        'password': new FormControl(null, [Validators.required, this.checkPassword]),
        'username': new FormControl(null, [Validators.required])
      }
    )
  }

  checkPassword(): boolean{
    return true;
  }



  onSubmit(formData: FormGroup, formDirective: FormGroupDirective): void {

    const email = formData.value.email;
    const password = formData.value.password;
    const username = formData.value.username;
    this.auth.registerUSer(password, username);
    formDirective.resetForm();
    this.registerForm.reset();
  }

}
