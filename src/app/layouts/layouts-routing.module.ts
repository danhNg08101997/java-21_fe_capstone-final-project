import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LayoutsComponent } from './layouts.component';

const layoutsRoutes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'detail', component: DetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(layoutsRoutes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
