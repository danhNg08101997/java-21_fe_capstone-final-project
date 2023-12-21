import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    component: LayoutsComponent,
    loadChildren: () =>
      import('./layouts/layouts.module').then((m) => m.LayoutsModule),
  },
];
