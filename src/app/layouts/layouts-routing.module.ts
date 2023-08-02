import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GdvComponent } from './pages/components/gdv/gdv.component';

const layoutsRoutes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'gdv', component: GdvComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutsRoutes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
