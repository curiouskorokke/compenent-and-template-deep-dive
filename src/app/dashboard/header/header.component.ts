import { Component, Input } from '@angular/core';
import { Header } from './header.interface';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class DashboardHeaderComponent {
  @Input({ required: true }) config!: Header;
}
