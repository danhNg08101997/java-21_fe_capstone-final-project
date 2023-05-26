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
import { MenProductComponent } from './pages/components/men-product/men-product.component';
import { WomenProductComponent } from './pages/components/women-product/women-product.component';
import { KidsProductComponent } from './pages/components/kids-product/kids-product.component';

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
    MenProductComponent,
    WomenProductComponent,
    KidsProductComponent,

  ],
})
export class LayoutsModule {}
