import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const layoutsRoutes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutsRoutes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
