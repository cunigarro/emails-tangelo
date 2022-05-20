import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dasboard.routing';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [],
  providers: [],
})
export class DashboardModule {}
