import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './layouts/pages/page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  // Module để trong imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    LayoutsModule,
    BrowserAnimationsModule,
  ],
  // Components để trong declarations
  declarations: [AppComponent, PageNotFoundComponent],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
