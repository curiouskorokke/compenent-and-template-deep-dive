import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TicketComponent } from './ticket/ticket.component';
import { TrafficComponent } from './traffic/traffic.component';
import { DashboardItemComponent } from './item/item.component';
import { NewTicketComponent } from './ticket/new/new.component';

@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardItemComponent,
    ServerStatusComponent,
    TicketComponent,
    NewTicketComponent,
    TrafficComponent,
  ],
  imports: [CommonModule],
  exports: [ServerStatusComponent, TicketComponent, TrafficComponent],
})
export class DashboardModule {}
