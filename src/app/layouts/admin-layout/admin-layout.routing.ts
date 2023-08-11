import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';

import { GdvComponent } from 'src/app/pages/gdv/gdv.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'gdv', component: GdvComponent },
  { path: '**', component: PageNotFoundComponent },
];
