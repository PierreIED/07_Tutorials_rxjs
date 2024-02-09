import {Routes} from '@angular/router';
import {CategoriesComponent} from "./components/categories/categories.component";
import {TutorialsComponent} from "./components/tutorials/tutorials.component";
import {AddTutorialComponent} from "./components/add-tutorial/add-tutorial.component";
import {LoginComponent} from "./components/login/login.component";
import {inject} from "@angular/core";
import {AuthenticationService} from "./services/authentication.service";
import {LogoutComponent} from "./components/logout/logout.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: CategoriesComponent},
  {path: 'all', component: TutorialsComponent, canActivate:[() => inject(AuthenticationService).isLogged()]},
  {path: 'tutorials/add', component: AddTutorialComponent, canActivate:[() => inject(AuthenticationService).isLogged()] },
  {path: 'login', component: LoginComponent, canActivate:[ () => !inject(AuthenticationService).isLogged()]},
  {path: 'logout', component: LogoutComponent, canActivate:[ () => inject(AuthenticationService).isLogged()]},
  {path: '**', redirectTo: '/'}
];
