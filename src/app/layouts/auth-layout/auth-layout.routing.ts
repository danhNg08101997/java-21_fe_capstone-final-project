import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';

export const AuthLayoutRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },
];
