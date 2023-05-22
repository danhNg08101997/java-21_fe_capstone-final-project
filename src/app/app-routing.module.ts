import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/pages/home/home.component';
import { DetailComponent } from './layouts/pages/detail/detail.component';
import { PageNotFoundComponent } from './layouts/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
