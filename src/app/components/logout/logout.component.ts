import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    MatCard,
    RouterLink,
    MatAnchor
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  logout(): void{
    localStorage.setItem('token', "");
    alert('vous êtes bien déconnecté');
  }

  protected readonly alert = alert;
}
