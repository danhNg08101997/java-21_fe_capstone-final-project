import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { TabProductComponent } from './pages/components/tab-product/tab-product.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SlickCarouselModule,
    MatTabsModule,
  ],
  declarations: [
    HomeComponent,
    DetailComponent,
    LayoutsComponent,
    HeaderComponent,
    FooterComponent,
    TabProductComponent,

  ],
})
export class LayoutsModule {}
