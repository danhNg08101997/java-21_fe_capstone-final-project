import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { GdvComponent } from 'src/app/pages/gdv/gdv.component';
import { GdvModalComponent } from 'src/app/pages/gdv/gdv-modal/gdv-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ToastrModule.forRoot(),
    NgSelectModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,

    GdvComponent,
    GdvModalComponent,
  ],
})
export class AdminLayoutModule {}
