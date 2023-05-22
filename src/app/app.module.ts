import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './layouts/pages/page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './layouts/components/header/header.component';
import { FooterComponent } from './layouts/components/footer/footer.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, AuthModule],

  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
