import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthenticationService} from "../../services/authentication.service";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatButton,
    MatInput,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
    MatCardModule,
    MatToolbar,
    MatIcon
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private auth: AuthenticationService) {
    this.createForm();
  }

  createForm() {
    this.registerForm = new FormGroup(
      {
        'password': new FormControl(null, [Validators.required]),
        'username': new FormControl(null,[Validators.required]),
        'password2' : new FormControl([Validators.required , this.checkPassword])
      }
    )
  }

  checkPassword(): boolean{
    return this.registerForm.get('password') == this.registerForm.get('password2');
  }



  onSubmit(formData: FormGroup, formDirective: FormGroupDirective): void {

    const password = formData.value.password;
    const username = formData.value.username;
    this.auth.registerUSer(password, username);
    formDirective.resetForm();
    this.registerForm.reset();
  }

}
