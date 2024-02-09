import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {AuthenticationService} from "../../services/authentication.service";
import {Observable} from "rxjs";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatButton,

    ReactiveFormsModule,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username =  new FormControl<string>('');
  password = new FormControl<string>('');


  constructor(private authenticationService: AuthenticationService) {
  }

  login(): void{
    this.authenticationService
      .login(this.username.value!, this.password.value!)
      .subscribe(t => localStorage.setItem("token", JSON.stringify(t)));
  }

  protected readonly localStorage = localStorage;
}
