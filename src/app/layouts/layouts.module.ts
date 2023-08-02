import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GdvComponent } from './pages/components/gdv/gdv.component';
import { CustomerComponent } from './pages/components/customer/customer.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SlickCarouselModule,
    MatTabsModule,
  ],
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    GdvComponent,
    CustomerComponent,
  ],
})
export class LayoutsModule {}
